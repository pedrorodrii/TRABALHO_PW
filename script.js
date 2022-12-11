const url = 'https://economia.awesomeapi.com.br/last/'
const moedaDolarReal = 'USD-BRL'
const moedaReal = 'BTC-BRL'
const moedaEuro = 'EUR-BRL'

//Saidas dos Valores
const moedaSaidaDolar = document.getElementById('moedaSaidaDolar') 
const saidaDolarReal = document.getElementById('saidaDolarReal')
const saidaDolarEuro = document.getElementById('saidaDolarEuro')
const saidaDolarDate = document.getElementById('saidaDolarDate')
const saidaDolarRealMin = document.getElementById('saidaDolarRealMin')

const moedaSaidaReal = document.getElementById('moedaSaidaReal')
const saidaReal = document.getElementById('saidaReal')
const saidaRealMin = document.getElementById('saidaRealMin')
const saidaRealDate = document.getElementById('saidaRealDate')

const moedaSaidaEuro = document.getElementById('moedaSaidaEuro')
const saidaEuro = document.getElementById('saidaEuro')
const saidaEuroMin = document.getElementById('saidaEuroMin')
const saidaEuroDate = document.getElementById('saidaEuroDate')

    //Botões
    let btnConverter = document.getElementById('btnConverter')
    let btnLimpar = document.getElementById('btnLimpar')
    let valor = document.getElementById('valor01')
    let valor02 = document.getElementById('valor02')
    let valor03 = document.getElementById('valor03')
    let saida = document.getElementById('saida')


    // Opções 
    let USD = document.getElementById('USD')
    let EUR = document.getElementById('EUR')
    let BRL = document.getElementById('BRL')

fetch(url+moedaReal)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        // Imprimiar Valores
        const real = data.BTCBRL
        moedaSaidaReal.innerHTML = real.name
        saidaReal.innerHTML = parseFloat(real.high).toLocaleString('pt-br', {
            style : 'currency',
            currency : 'BRL'
        }) 
        saidaRealMin.innerHTML = parseFloat(real.low).toLocaleString('pt-BR', {
            style : 'currency',
            currency : 'BRL'
        })
        saidaRealDate.innerHTML = real.create_date
    })

fetch(url+moedaEuro)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        // Imprimiar Valores
        const euro = data.EURBRL
        moedaSaidaEuro.innerHTML = euro.name
        saidaEuro.innerHTML = parseFloat(euro.high).toLocaleString('pt-br', {
            style : 'currency',
            currency : 'BRL'
        }) 
        saidaEuroMin.innerHTML = parseFloat(euro.low).toLocaleString('pt-BR', {
            style : 'currency',
            currency : 'BRL'
        })
        saidaEuroDate.innerHTML = euro.create_date
    })



fetch(url+moedaDolarReal)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        // Imprimiar Valores
        const dolarReal = data.USDBRL
        moedaSaidaDolar.innerHTML = dolarReal.name
        saidaDolarReal.innerHTML = parseFloat(dolarReal.high).toLocaleString('pt-br', {
            style : 'currency',
            currency : 'BRL'
        }) 
        saidaDolarRealMin.innerHTML = parseFloat(dolarReal.low).toLocaleString('pt-BR', {
            style : 'currency',
            currency : 'BRL'
        })
        saidaDolarDate.innerHTML = dolarReal.create_date

    })

btnLimpar.addEventListener('click', function() {
    valor01.value = ''
    alert("Valor Limpado")
})

function converter() {
    const moedaConvertida01 = valor02.value
    const moedaConvertida02 = valor03.value

    if(moedaConvertida01 == moedaConvertida02) {
        alert("Moedas Iguais")
    }
    if(valor.value == '' || valor.value == null || valor.value == 0){
        alert("Preencha algo no campo ou maior que zero")
    }
}

// function dolarReal() {
//     const url = 'https://economia.awesomeapi.com.br/last/'
//     const moeda = 'USD-BRL'
//     fetch(url+moeda)
//     .then(function(response){
//         return response.json()
//     })
//     .then(function(data){
//         const dolar = data.USDBRL
//         let conversao = (dolar.high * valor.value)
//         let moedaConvertida = conversao.toLocaleString('pt-BR', {style : 'currency', currency : 'BRL'})
//         saida.innerHTML = `${moedaConvertida}`
//     })
// }
// function realDolar() {
//     const url = 'https://economia.awesomeapi.com.br/last/'
//     const moeda = 'BRL-USB'
//     fetch(url+moeda)
//     .then(function(response){
//         return response.json()
//     })
//     .then(function(data){
//         const dolar = data.BRLUSB
//         let conversao = (dolar.high * valor.value)
//         let moedaConvertida = conversao.toLocaleString('pt-BR', {style : 'currency', currency : 'BRL'})
//         saida.innerHTML = `${moedaConvertida}`
//     })
// }

// function realEuro() {
//     const url = 'https://economia.awesomeapi.com.br/last/'
//     const moeda = 'BRL-EUR'
//     fetch(url+moeda)
//     .then(function(response){
//         return response.json()
//     })
//     .then(function(data){
//         const dolar = data.BRLEUR
//         let conversao = (dolar.high * valor.value)
//         let moedaConvertida = conversao.toLocaleString('de-DE', {style : 'currency', currency : 'EUR'})
//         saida.innerHTML = `${moedaConvertida}`
//     })
// }