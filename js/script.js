const valor = document.getElementById("valor").value;

var unidades;
var dezenas;
var centenas;

function testaValor(val)
{
    if (val < 0) {
        alert("Valor menor que zero!");
    }
}

extensoCentena(val, cent)
{
    if (val % 1000 == 100)
        return "Cem"
    switch (cent) {
        case 100:
            return "cento"
            break;

        case 200:
            return "duzentos"
            break;

        case 300:
            return "trezentos"
            break;

        case 400:
            return "quatrocentos"
            break;

        case 500:
            return "quinhentos"
            break;

        case 600:
            return "seiscentos"
            break;

        case 700:
            return "setecentos"
            break;

        case 800:
            return "oitocentos"
            break;

        case 900:
            return "novecentos"
            break;
        
    
        default:
            break;
    }
}

extensoDezena(dez)
{

}


function extenso()
{
    testaValor(valor);
    var resultado = "";
    
    unidades = valor % 10;
    dezenas = (valor % 100) - unidades;
    centenas = (valor % 1000) - dezenas - unidades;

    resultado = extensoCentena(valor, centenas);
    //resultado += extensoDezena(dezenas);

    document.getElementById("result").innerText = resultado;
}

