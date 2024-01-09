export async function onRequest(context) {
  const configurations = [
    {
      id: 'widget-form-whatsapp',
      description: 'Widget with a form and button to send WhatsApp message',
      url: 'src/form_whatsapp.js',
      // settings: {
      //   color: 'red',
      // },
    }
  ];
  return new Response(JSON.stringify(configurations));

  // get from R2
  // https://developers.cloudflare.com/pages/functions/bindings/
  // const obj = await context.env.BUCKET.get('some-key');
  // if (obj === null) {
  //   return new Response('Not found', { status: 404 });
  // }
  // return new Response(obj.body);
}
