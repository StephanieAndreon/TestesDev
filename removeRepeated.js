/*                                          -
 * Codigo feito por Stephanie Andreon       -
 * Contato: stephanie.andreon@gmail.com     -
 --------------------------------------------
 * @param {string} string
 * @param {number} limit
 * @return {string}
*/
// Função referente à questão 1 do teste para Estágio em Dev.
const removeRepeated = (string, limit) => {
    // Transformamos a string em um array para poder manipular seus elementos
    var arrayString = string.split('');
    // Inicializamos e atribuímos a variável para armazenar o tamanho do array
    var len = arrayString.length;
    // Na exeção de nenhuma string ser fornecida, retornamos uma mensagem de aviso
    if (string === '') {
        window.alert("Por favor forneça uma string");
    }
    if (limit == null) {
        window.alert("Por favor forneça um limite");
    }
    else {
        // Percorremos o array
        for (var i = 0; i < len; i++) {
            // Geramos subarrays com 1 unidade a mais de tamanho que o limite passado para analisar repetições
            var arrayParcial = arrayString.slice(i, i+limit+1);
            // Inicializamos o contador do número de aparições consecutivas de um mesmo elemento
            var contador = 1;
            // Inicializamos e atribuímos a variável para armazenar o tamanho do subarray
            var lenParcial = arrayParcial.length;
            // Percorremos o subarray
            for (var j = 0; j < lenParcial; j++) {
                // Para os últimos elementos da string, geramos arrays mais curtos que o limite, portanto não possuem repetição acima do limite
                if (lenParcial <= limit) {break;}
                // Se dois elementos consecutivos forem iguais, incrementamos o contador
                if (arrayParcial[j] == arrayParcial[j+1]) {
                    contador = contador + 1;
                }
                // Se o número de repetições é maior do que o limite fornecido, removemos o elemento
                if (contador > limit) {
                    // Substituímos a letra pelo elemento vazio no array
                    arrayString[i] = '';
                    // Transformamos o array de volta para string
                    string = arrayString.join('');
                    break;
                }
            }
        }
    }
    // Retornamos a string com as repetições modificadas como saída
    return string;
}

export default removeRepeated;
