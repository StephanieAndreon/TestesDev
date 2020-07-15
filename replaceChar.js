/*                                          -
 * Codigo feito por Stephanie Andreon       -
 * Contato: stephanie.andreon@gmail.com     -
 --------------------------------------------
 * @param {string} string
 * @param {number} times
 * @return {string}
 */
 // Função referente à questão 2 do teste para Estágio em Dev.
const replaceChar = (string, times) => {
    // Na exeção de nenhuma string ser fornecida, retornamos uma mensagem de aviso
    if (string === '') {
        window.alert("Por favor forneça uma string");
    }
    // Na exeção do parâmetro times não ser fornecido, retornamos uma mensagem de aviso
    if (times == null) {
        window.alert("Por favor forneça um número inteiro");
    }
    else {
        // Transformamos a string em um array para poder manipular seus elementos
        var arrayString = string.split('');
        // Inicializamos e atribuímos a variável para armazenar o valor da posição da primeira aparição do caractere ? no array
        var posicao = arrayString.indexOf('?');
        // Inicializamos e atribuímos a variável para armazenar o tamanho do array
        var len = arrayString.length;
        // Enquanto houver algum caractere ? no array, o loop continua
        while (posicao !== -1) {
            // Atualizamos a posição da primeira ocorrência do caractere ?
            posicao = arrayString.indexOf('?');
            // Caso para o caractere ? no início
            if (posicao == 0) {
                // Inicializamos a variável para armazenar o numero de caracteres ? deletados do final do array
                var caracteresDeletados = 0;
                // Para tratar os casos do tipo ?string???, excluímos os últimos caracteres consecutivos ?, e depois os inserimos novamente
                while (arrayString[0] === arrayString[len -1]) {
                    // Excluímos o último elemento do array
                    arrayString.pop();
                    // Atualizamos a variável que contém o tamanho do array
                    len = arrayString.length;
                    // Incrementamos a variável de caracteres deletados do final do array
                    caracteresDeletados = caracteresDeletados + 1;
                }
                for (var i = 1; i <= times; i++) {
                    // Atualizamos a variável que contém o tamanho do array
                    len = arrayString.length;
                    // Na primeira iteração, substituímos o caractere ? pelo último caractere no array
                    if (i == 1) {
                        arrayString[0] = arrayString[len - 1];
                    }
                    // Para as demais iterações, inserimos novos caracteres no início do array ao invés de substituírmos
                    else {
                        arrayString.splice(0, 0, arrayString[len - 1]);
                    }
                }
                // Inserimos de volta ao final do array os caracteres deletados no início
                for (var j = 0; j < caracteresDeletados ; j++) {
                    arrayString.push('?')
                }
            }
            // Demais casos de posicionamento do caractere ?
            else {
                for (var k = 1; k <= times; k++) {
                    // Na primeira iteração, substituímos o caracter ? pelo caractere anterior no array
                    if (k == 1) {
                        arrayString[posicao] = arrayString[posicao - 1];
                    }
                    // Para as demais iteracoes, inserimos novos caracters no array ao inves de substituir
                    else {
                        arrayString.splice(posicao, 0, arrayString[posicao -1]);
                    }

                }
            }
        }
        // Transformamos o array de volta para string
        string = arrayString.join('');
        // Retornamos a string modificada como saída
    }
    return string;
}
export default replaceChar;
