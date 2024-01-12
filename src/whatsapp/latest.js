// js.leads2b.com/whatsapp/latest.js
(async function () {
  const version = await fetch('/getSnippetVersion').then(res => res.text());
  var configScript = document.createElement('script');

  // js.leads2b.com/whatsapp/<script-version>/form_whatsapp.js
  configScript.src = 'src/whatsapp/' + version + '/form_whatsapp.js';
  configScript.async = true;

  document.head.appendChild(configScript);
})();
