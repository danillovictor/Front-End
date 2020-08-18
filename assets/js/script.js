/*
Case Sensitive = reconhece letras maiúsculas e minúsculas em palavras reservadas

ACESSANDO O DOM NO JS:

Por TAG: getElementByTagName()
Por ID: getElementById()
por Nome: getElementByName()
por Classe: getElementByClassName()
por Seletor do CSS: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
/*let assunto = window.document.getElementById('assunto')*/
let assunto = document.querySelector('#assunto')


nome.style.width = "34%"
email.style.width = "34%"

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome inválido!"
        txtNome.style.color = "red"
    } else {
        txtNome.innerHTML = "Nome válido!"
        txtNome.style.color = "green"
    }
}
function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 ) {
        txtEmail.innerHTML = "E-mail inválido!"
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = "E-mail válido!"
        txtEmail.style.color = "green"
    }

}
function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")
    if (assunto.value.length > 255 == 1 ) {
        txtAssunto.innerHTML = "Campo inválido!"
        txtAssunto.style.color = "red"
    } else {
        txtAssunto.innerHTML = "Campo válido!"
        txtAssunto.style.color = "green"
    }

}