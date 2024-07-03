// Cotação de moedas do dia.
const USD = 4.87
const EUR = 5.32
const GBP = 6.08

// Obtendo os elementos do formulário.
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// Manipulando o input amount para receber somente números.
amount.addEventListener("input", () =>{
  const hasCharacters = /\D+/g
  amount.value = amount.value.replace(hasCharacters, "")
})

// Capturando evento de submit do formulário.
form.onsubmit = (event) => {
  event.preventDefault()

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break
    case  "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break
  }
}

// Função para converter a moeda.
function convertCurrency(amount, price, symbol) {
  try {
    // Ecibindo a cotação da moeda selecionada.
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    // Calcula o total
    let total = amount * price

    //exibe o resultado total.
    result.textContent = total

    // Aplica a classe que exibe o footer para mostrar o resultado.
    footer.classList.add("show-result")
    
  } catch (error) {
    // Remove a classe do footer removendo ele da tela.
    footer.classList.remove("show-result")
    console.log(error)
    alert("Não foi passpivel converter. Tente novamente mais tarde.")
  }
}

function formatCurrencyBRL(value) {
  // Converte para número e utiliza o toLocaleString para formatar no padrão BRL.
  return Number(value).toLocaleString("pt-Br", {style: "currency", currency: "BRL"})
}