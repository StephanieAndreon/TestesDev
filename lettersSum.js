/*                                          -
 * Codigo feito por Stephanie Andreon       -
 * Contato: stephanie.andreon@gmail.com     -
 --------------------------------------------
 * @param {string} string1
 * @param {string} string2
 * @return {number}
 */
// Função referente à questão 3 do teste para Estágio em Dev.
const lettersSum = (string1, string2) => {
    // Checamos se ambas as strings fornecidas são válidas, i.e. não vazias
    if (string1 === '' || string2 === '')  {
        window.alert('Por favor forneça duas strings')
    }
    else {
        // Criamos um dicionário para associar os valores numéricos às letras do alfabeto
        var dict = {
            'a' : 1 , 'b' : 2 , 'c' : 3 , 'd' : 4 , 'e' : 5 ,
            'f' : 6 , 'g' : 7 , 'h' : 8 , 'i' : 9 , 'j' : 10 ,
            'k' : 11 , 'l' : 12 , 'm' : 13 , 'n' : 14 , 'n' : 14 ,
            'q' : 15 , 'p' : 16 , 'q' : 17 , 'r' : 18 , 's' : 19 ,
            't' : 20 , 'u' : 21 , 'v' : 22 , 'w' : 23 , 'x' : 24 ,
            'y' : 25 , 'z' : 26
        };
        // Transformamos as strings em arrays para poder manipular seus elementos
        var arrayString1 = string1.split('');
        var arrayString2 = string2.split('');
        // Ordenamos alfabeticamente os arrays
        var arrayString1 = arrayString1.sort();
        var arrayString2 = arrayString2.sort();
        // Inicializamos variáveis para armazenar o tamanho dos arrays
        var len1 = arrayString1.length;
        var len2 = arrayString2.length;
        // Atribuímos os valores numéricos às letras de interesse de acordo com nosso dicionário
        var maiorLetraString1 = dict[arrayString1[len1 - 1]]
        var menorLetraString1 = dict[arrayString1[0]];
        var maiorLetraString2 = dict[arrayString2[len2 - 1]];
        var menorLetraString2 = dict[arrayString2[0]];
        // Aqui realizamos a operação (maiorLetraString1 * menorLetraString2) + (maiorLetraString2 * menorLetraString1)
        var resultado = (maiorLetraString1 * menorLetraString2) + (maiorLetraString2 * menorLetraString1)
    }
    // Retornamos o resultado da operação anterior como retorno da função
   return resultado;
}
export default lettersSum;
