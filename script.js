function mostrarInput() {
  const botao = document.getElementById("botao")
  const input = document.getElementById("valor")
  const resultado = document.getElementById("resultado")

  botao.style.display = "none" // esconde o botão
  resultado.innerHTML = "" // limpa qualquer resultado anterior
  input.style.display = "inline-block" // mostra o input
  input.focus() // já posiciona o cursor no input
}

function verificarEnter(event) {
  if (event.key === "Enter") {
    converter()
  }
}

function converter() {
  const input = document.getElementById("valor")
  const botao = document.getElementById("botao")
  const resultado = document.getElementById("resultado")

  const valorEmReais = parseFloat(input.value)

  if (isNaN(valorEmReais) || valorEmReais <= 0) {
    resultado.innerHTML = `<p style="color: red;">Digite um valor válido!</p>`
    return
  }

  const taxaDeConversao = 975 // 1 real = 975 wons (exemplo)
  const valorConvertido = valorEmReais * taxaDeConversao

  resultado.innerHTML = `<p>💰 R$${valorEmReais.toFixed(
    2
  )} vale aproximadamente <strong>₩${valorConvertido.toFixed(0)}</strong></p>`

  input.style.display = "none" // esconde o input
  input.value = "" // limpa o campo
  botao.style.display = "inline-block" // mostra novamente o botão
}
