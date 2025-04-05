const somMoeda = new Audio("./assets/coin.mp3")

function mostrarInput() {
  const botao = document.getElementById("botao")
  const input = document.getElementById("valor")
  const resultado = document.getElementById("resultado")

  botao.style.display = "none"
  resultado.innerHTML = ""
  input.style.display = "inline-block"
  input.focus()
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

  const valor = parseFloat(input.value)

  if (isNaN(valor) || valor <= 0) {
    resultado.innerHTML = `<p style="color: red;">Digite um valor válido!</p>`
    return
  }

  const taxa = 930.27 // Trocar depois por valor em tempo real
  const convertido = (valor * taxa).toFixed(2)

  resultado.innerHTML = `💰 R$${valor.toFixed(
    2
  )} equivalem a <strong>₩${convertido}</strong>`

  input.style.display = "none"
  input.value = ""
  botao.style.display = "inline-block"

  // Toca o som
  somMoeda.play()
}
