function initializeChatWithModal() {
  // create a chat button
  const chatButton = document.createElement('button');

  const whatsappIcon = document.createElement('img');
  // TODO: replace this with a CDN link
  whatsappIcon.src = '../assets/whatsapp-icon-logo.png'; // will be replaced by a CDN link
  whatsappIcon.alt = 'WhatsApp Icon';
  whatsappIcon.style.width = '70px';
  whatsappIcon.style.height = '70px';

  // Adiciona o ícone ao botão
  chatButton.appendChild(whatsappIcon);

  // aditional styles
  chatButton.style.position = 'fixed';
  chatButton.style.bottom = '40px';
  chatButton.style.right = '40px';
  chatButton.style.border = 'none';
  chatButton.style.backgroundColor = 'transparent';
  chatButton.style.cursor = 'pointer';

  // add a click event listener to the button
  chatButton.addEventListener('click', () => {
    openChatModal(chatButton);
  });

  document.body.appendChild(chatButton);

  // Função para abrir a modal
  function openChatModal(triggerButton) {
    // Crie uma modal com os campos desejados
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.tabIndex = '-1';
    modal.role = 'dialog';

    modal.innerHTML = `
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Entre em Contato</h5>
          </div>
          <div class="modal-body">
            <form id="contactForm">
              <div class="form-group">
                <label for="name">Nome Completo</label>
                <input type="text" class="form-control" id="name" placeholder="Informe seu nome completo">
              </div>
              <div class="form-group">
                <label for="phone">Email</label>
                <input type="tel" class="form-control" id="phone" placeholder="Informe seu email">
              </div>
              <div class="form-group">
                <label for="phone">Telefone</label>
                <input type="tel" class="form-control" id="phone" placeholder="Informe um telefone">
              </div>
              <div class="form-group">
                <label for="phone">Empresa</label>
                <input type="tel" class="form-control" id="phone" placeholder="Informe o nome da empresa">
              </div>
              <div class="form-group">
                <label for="phone">Cargo</label>
                <input type="tel" class="form-control" id="phone" placeholder="Informe um cargo">
              </div>
              <button type="button" class="btn btn-primary" onclick="submitForm()">Entrar em contato</button>
            </form>
          </div>
        </div>
      </div>
    `;

    // Calcular as coordenadas do botão
    const buttonRect = triggerButton.getBoundingClientRect();

    modal.style.position = 'absolute';
    modal.style.left = buttonRect.left - 50 + 'px';
    modal.style.top = buttonRect.top - 290 + 'px';


    // add the modal to the page
    document.body.appendChild(modal);

    if (typeof $ !== 'undefined') {
      $(modal).modal('show');
    }
  }

  window.submitForm = function () {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    const whatsappLink = `https://wa.me/5546988020232?text=Nome: ${encodeURIComponent(name)}%0A%0ATelefone: ${encodeURIComponent(phone)}`;
    window.open(whatsappLink, '_blank');

    $('.modal').modal('hide');
  };
}

initializeChatWithModal();
