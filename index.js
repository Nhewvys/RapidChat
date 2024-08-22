const button = document.querySelector('#button');
const cellphone = document.querySelector('#cellphone');
const nameInput = document.querySelector('#name-person');
const messageInput = document.querySelector('#message');
const cellError = document.querySelector('#cellError');

button.addEventListener('click', function (e) {
    e.preventDefault();
    verificar();
});

function verificar() {
    let name = nameInput.value;
    let message = messageInput.value;
    let mensagem = '';

    if (name.trim() !== '' && message.trim() !== '') {
        mensagem = "Olá " + name + "," + " " + message;
    } else if (name.trim() !== '') {
        mensagem = "Olá " + name;
    } else {
        mensagem = message;
    }

    console.log(mensagem);

    cellphone.style.border = 'none';

    if (cellphone.value == '') {
        cellError.innerText = 'Digite um número';
        cellphone.style.border = '2px solid #ed5463';

        return;
    } else {
        cellError.innerHTML = '';
        cellphone.style.border = '2px solid #fff';
    }

    const cellphoneNumber = cellphone.value;
    const formattedCellphoneNumber = cellphoneNumber.replace('(', '').replace(')', '').replace(' ', '').replace('-', '');
    const url = `https://web.whatsapp.com/send?phone=55${formattedCellphoneNumber}&text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank').focus();
}

function configureMaskInput() {
    IMask(cellphone, {mask: '(00) 00000-0000' });
}

configureMaskInput();
