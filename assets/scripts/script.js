
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*';

let novaSenha = "";
sizePassword.innerHTML = sliderElement.value;

slider.oninput = function () {
    sizePassword.innerHTML = this.value;
}

function generatePassword() {
    let pass = "";
    for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));

    }
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

// function copyPassword() {

//     navigator.clipboard.writeText(novaSenha)
//     alert("Senha copiada com sucesso!")
//     setTimeout(function () {
//         containerPassword.classList.add('hide')
//     }, 10000);
// }


function copyPassword() {
    try {
        // Obtém a senha que você deseja copiar
        // var novaSenha = document.getElementById('password').value;

        // Verifica se o navegador suporta a API Clipboard
        if (navigator.clipboard) {
            navigator.clipboard.writeText(novaSenha)
                .then(function () {
                    alert("Senha copiada com sucesso!");
                })
                .catch(function (err) {
                    console.error('Erro ao copiar a senha: ', err);
                    alert("Erro ao copiar a senha. Por favor, copie manualmente.");
                });
        } else {
            // Se o navegador não suporta a API Clipboard, alerta o usuário
            alert("Seu navegador não suporta a função de cópia automática. Por favor, copie manualmente.");
        }

        // Oculta o container após 10 segundos
        setTimeout(function () {
            containerPassword.classList.add('hide');
        }, 10000);
    } catch (error) {
        console.error('Erro ao copiar a senha:', error);
        alert("Erro ao copiar a senha. Por favor, copie manualmente.");
    }
}

