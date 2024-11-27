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
    var result = "";
    switch (deze) {
        case 90:
            result = "noventa"
            break;
        case 80:
            result = "oitenta"
            break;
        case 70:
            result = "setenta"
            break;
        case 60:
            result = "sessenta"
            break;
        case 50:
            result = "cinquenta"
            break;
        case 40:
            result = "quarenta"
            break;
        case 30:
            result = "trinta"
            break;
        case 20:
            result = "vinte"
            break;
        default:
            break;
    }
    
    return result;
}

function extensoUnidade(val, unid)
{
    var result = "";

    switch (unid) {
        case 19:
            result = "dezenove";
            break;
        case 18:
            result = "dezoito";
            break;
        case 17:
            result = "dezessete";
            break;
        case 16:
            result = "dezesseis";
            break;
        case 15:
            result = "quinze";
            break;
        case 14:
            result = "quatorze";
            break;
        case 13:
            result = "treze";
            break;
        case 12:
            result = "doze";
            break;
        case 11:
            result = "onze";
            break;
        case 10:
            result = "dez";
            break;
        case 9:
            result = "nove";
            break;
        case 8:
            result = "oito";
            break;
        case 7:
            result = "sete";
            break;
        case 6:
            result = "seis";
            break;
        case 5:
            result = "cinco";
            break;
        case 4:
            result = "quatro";
            break;
        case 3:
            result = "três";
            break;
        case 2:
            result = "dois";
            break;
        case 1:
            result = "um";
            break;
        default:
            break;
    }

    return result;

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

    // resultado recebe as centenas
    resultado = extensoCentena(valor, centenas);
    // se as dezenas forem maiores que 20 entraram normalmente na função de dezenas
    if ((valor % 100) >= 20)
    {
        // acrescenta "e" e chama dezenas ate 10
        resultado += " e ";
        resultado += extensoDezena(valor, dezenas);
    } else if ((valor % 100) > 0) // menor que 20 entrar na função unidades também
    {
        // acrescenta "e" e chama unidades ate 9
        resultado += " e ";
        resultado += extensoUnidade(valor, (valor % 100));
    } 
    // Agora a função unidade para menores que 9
    if (unidades > 0 && (valor % 100) >= 20) 
    {
        resultado += " e ";
        resultado += extensoUnidade(valor, unidades);
    }

    // Mostra o resultado
    document.getElementById("result").innerText = resultado;
}

