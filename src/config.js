// js.leads2b.com/config.js

(async function (token) {
  console.log('leads2bSettings.token', token);
  if (!token) {
    console.error('leads2bSettings.token is not defined');
    return;
  }

  // currently using page function advanced mode through a _worker.js file
  // in this case the functions diretory is ignored
  // TODO: see about _routes.json file to control when functions are invoked
  const configs = await (await fetch('/getCompanyConfiguration')).json();
  configs.forEach(config => {
    if (config.dir && typeof config.dir === 'string') {
      var scriptElement = document.createElement('script');
      // js.leads2b.com/<script-slug>/latest.js
      scriptElement.src = 'src/' + config.dir + '/latest.js';

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
