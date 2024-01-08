// js.leads2b.com/config.js

(function (token) {
  console.log('leads2bSettings.token', token);

  function getCompanyConfiguration(token) {
    if (token != '') {
      return [ {
        id: 'widget-form-whatsapp',
        description: 'Widget with a form and button to send WhatsApp message',
        url: 'form_whatsapp.js',
        // url: 'https://js.leads2b.com/form/latest.js',
        // settings: {
        //   color: 'red',
        // },
      } ];
    }
  }

  const configs = getCompanyConfiguration(token);

  configs.forEach(config => {
    // load additional CDN script based on the customer configurations
    if (config.url && typeof config.url === 'string') {
      var scriptElement = document.createElement('script');
      scriptElement.src = config.url;

      // add additional parameters, if provided
      if (config.settings && typeof config.settings === 'object') {
        Object.keys(config.settings).forEach(key => {
          scriptElement.src += `?${key}=${config.settings[key]}`;
        });
      }

      scriptElement.async = true;
      document.head.appendChild(scriptElement);
    }
  });
}
)(window.leads2bSettings.token);
