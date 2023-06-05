const button = document.querySelector('#button')
const cellphone = document.querySelector('#cellphone')
const maskOptions = {
    mask: '(00) 00000-0000'
}

button.addEventListener('click', function (e) {
    e.preventDefault();
    verificar();
})

function verificar(){
    let name = document.getElementById('name-person').value;
    let message = document.getElementById('message').value;
    let mensagem = "Olá " + name + "," + " " + message;
    console.log(mensagem)

    let cellError = document.querySelector('#cellError');
    let input = document.querySelector('#cellphone')

    if (input.value =='') {
        cellError.innerText = 'Digite um número';
        input.style.border = '2px solid #ed5463'

        return
    } else {
        cellError.innerHTML = '';
        input.style.border = '2px solid #fff'
    }
    
    const cellphoneNumber = input.value
    const formattedCellphoneNumber = cellphoneNumber.replace('(', '').replace(')', '').replace(' ', '').replace('-', '')
    const url = `https://api.whatsapp.com/send?phone=55${formattedCellphoneNumber}&text=${encodeURIComponent(mensagem)}`
    window.open(url, '_blank').focus()
}



function configureMaskInput() {
    IMask(cellphone, maskOptions)
}

configureMaskInput()