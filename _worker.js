import latestVersion from './src/latestVersion.js';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname.startsWith('/api/')) {
      // TODO: Add your custom /api/* logic here.
      return new Response('Ok');
    }

    if (url.pathname.startsWith('/getCompanyConfiguration')) {
      return handleGetConfigurations(request, env);
    }

    if (url.pathname.startsWith('/getSnippetVersion')) {
      return handleSnippetVersion(request, env);
    }

    // Otherwise, serve the static assets.
    // Without this, the Worker will error and no assets will be served.
    return env.ASSETS.fetch(request);
  },
}

async function handleGetConfigurations(request, env) {
  // TODO: get the configurations from R2 using the customer token
  const configurations = [
    {
      id: 'widget-form-whatsapp',
      description: 'Widget with a form and button to send WhatsApp message - Advanced Function Worker Mode',
      dir: 'whatsapp',
    }
  ];
  return new Response(JSON.stringify(configurations));
}

async function handleSnippetVersion(request, env) {
  const wppVersion = latestVersion.whatsapp;
  return new Response(wppVersion);
}
