export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname.startsWith('/api/')) {
      // TODO: Add your custom /api/* logic here.
      return new Response('Ok');
    }

    if (url.pathname.startsWith('/getCompanyConfiguration')) {
      // Lógica para buscar configurações
      return handleGetConfigurations(request, env);
    }

    // Otherwise, serve the static assets.
    // Without this, the Worker will error and no assets will be served.
    return env.ASSETS.fetch(request);
  },
}

async function handleGetConfigurations(request, env) {
  const configurations = [
    {
      id: 'widget-form-whatsapp',
      description: 'Widget with a form and button to send WhatsApp message - Advanced Function Worker Mode',
      url: 'src/form_whatsapp.js',
    }
  ];
  return new Response(JSON.stringify(configurations));
}
