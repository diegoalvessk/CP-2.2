let numero0 = document.getElementById("0")
let numero1 = document.getElementById("1")
let numero2 = document.getElementById("2")
let numero3 = document.getElementById("3")
let numero4 = document.getElementById("4")
let numero5 = document.getElementById("5")
let numero6 = document.getElementById("6")
let numero7 = document.getElementById("7")
let numero8 = document.getElementById("8")
let numero9 = document.getElementById("9")
let operacaoVezes = document.getElementById("X")
let operecaoMenos = document.getElementById("-")
let operacaoMais = document.getElementById("+")
let operacaoDivisao = document.getElementById("/")
let resultado = document.getElementById("resultado")
let igual = document.getElementById("=")
let ultimoResultado = document.getElementById("ultimo-resultado")


numero0.addEventListener("click" , event => {    
    resultado.innerHTML += "0"
})
numero1.addEventListener("click" , event => {    
    resultado.innerHTML += "1"
})
numero2.addEventListener("click" , event => {    
    resultado.innerHTML += "2"
})
numero3.addEventListener("click" , event => {    
    resultado.innerHTML += "3"
})
numero4.addEventListener("click" , event => {    
    resultado.innerHTML += "4"
})
numero5.addEventListener("click" , event => {    
    resultado.innerHTML += "5"
})
numero6.addEventListener("click" , event => {    
    resultado.innerHTML += "6"
})
numero7.addEventListener("click" , event => {    
    resultado.innerHTML += "7"
})
numero8.addEventListener("click" , event => {    
    resultado.innerHTML += "8"
})
numero9.addEventListener("click" , event => {    
    resultado.innerHTML += "9"
})
operacaoVezes.addEventListener("click" , event => {    
    resultado.innerHTML += " X "
})
operacaoMais.addEventListener("click" , event => {    
    resultado.innerHTML += " + "
})
operacaoDivisao.addEventListener("click" , event => {    
    resultado.innerHTML += " / "
})
operecaoMenos.addEventListener("click" , event => {    
    resultado.innerHTML += " - "
})
igual.addEventListener("click" , event => {    
    let textos
    textos = resultado.innerHTML.split(" ")
    console.log(textos)
    let operador = textos[1]
    switch (operador) {
        case "+":
            textos[0] = parseInt(textos[0])
            textos[2] = parseInt(textos[2])
            resultado.innerHTML = (textos[0] + textos[2]).toString()
            ultimoResultado.innerHTML = resultado.innerHTML
            break;
        
        case "/":
            textos[0] = parseInt(textos[0])
            textos[2] = parseInt(textos[2])
            resultado.innerHTML = (textos[0] / textos[2]).toString()
            ultimoResultado.innerHTML = resultado.innerHTML
            break;   
            
        case "-":
                textos[0] = parseInt(textos[0])
                textos[2] = parseInt(textos[2])
                resultado.innerHTML = (textos[0] - textos[2]).toString()
                ultimoResultado.innerHTML = resultado.innerHTML
                break;  

        case "X":
                    textos[0] = parseInt(textos[0])
                    textos[2] = parseInt(textos[2])
                    resultado.innerHTML = (textos[0] * textos[2]).toString()
                    ultimoResultado.innerHTML = resultado.innerHTML
                    break;            
    
        default:
            break;
    }
})






