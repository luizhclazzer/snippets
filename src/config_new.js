// js.leads2b.com/config.js

(async function (token) {
  console.log('leads2bSettings.token', token);
  if (!token) {
    console.error('leads2bSettings.token is not defined');
    return;
  }

  const configs = await (await fetch('/getCompanyConfiguration')).json();
  configs.forEach(config => {
    // load additional CDN script based on the customer configurations
    if (config.url && typeof config.url === 'string') {
      var scriptElement = document.createElement('script');
      scriptElement.src = config.url;

      // add additional parameters, if provided
      if (config.settings && typeof config.settings === 'object') {
        let params = Object.keys(config.settings)
          .map(key => `${key}=${config.settings[key]}`)
          .join('&');

        scriptElement.src += `?${params}`;
      }

      scriptElement.async = true;
      document.head.appendChild(scriptElement);
    }
  });
}
)(window.leads2bSettings.token);
