var unidades;
var dezenas;
var centenas;

// Inicia com o clique no go
window.onload = function()
{
    let btngo = document.getElementById("go");
    btngo.onclick = function(){
        extenso();
    } 
}

function testaValor(val)
{
    if (val < 0) {
        alert("Valor menor que zero!");
    }
}

function extensoCentena(val, cent)
{
    var result = "";
    if (val % 1000 == 100)
    {
        result = "Cem";
    } else 
    {
        switch (cent) {
            case 100:
                result = "cento"
                break;

            case 200:
                result = "duzentos"
                break;

            case 300:
                result = "trezentos"
                break;

            case 400:
                result = "quatrocentos"
                break;

            case 500:
                result = "quinhentos"
                break;

            case 600:
                result = "seiscentos"
                break;

            case 700:
                result = "setecentos"
                break;

            case 800:
                result = "oitocentos"
                break;

            case 900:
                result = "novecentos"
                break;
        
            default:
                break;
        }
    }

    return result;
}

function extensoDezena(val, deze)
{

}

// função principal
function extenso()
{
    const valor = parseInt(document.getElementById("valor").value);
    
    testaValor(valor);
    var resultado = "";
    
    unidades = valor % 10;
    dezenas = (valor % 100) - unidades;
    centenas = (valor % 1000) - dezenas - unidades;

    resultado = extensoCentena(valor, centenas);
    if ((centenas - dezenas) >= 10)
    {
        // acrescenta "e" e chama dezenas ate 10
    } else if ((centenas - dezenas) > 0) 
    {
        // acrescenta "e" e chama unidades ate 9
    }

    
    //resultado += extensoDezena(dezenas);

    document.getElementById("result").innerText = resultado;
}

