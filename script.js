function isPalindrome(str){
    let invertida = "";
    str = str.toLowerCase().replace(/\s/g, '')
    

    for(let i = str.length -1; i >= 0 ; i-- ){
        invertida += str[i];
    }

    if(invertida ==  str && typeof invertida == "string"){
        return true;
    }
    return false;
}
function arrayMaxMin(arr){
    let maiorNumeroEncontrado = arr[0];
    let menorNumeroEncontrado = arr[0];

    for(let i = 1 ; i < arr.length; i++){
        if(arr[i] > maiorNumeroEncontrado){
            maiorNumeroEncontrado = arr[i];
        }
        if(arr[i] < menorNumeroEncontrado){
            menorNumeroEncontrado = arr[i];
        }
    }
    let arrTodosOsValoresMenorMaior = [menorNumeroEncontrado, maiorNumeroEncontrado]
    return arrTodosOsValoresMenorMaior
}