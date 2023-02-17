let swap = (vetor, posicao, valor1, valor2) => vetor.splice(posicao, 2, valor1, valor2);

let shuffle = (vetor, qtdTrocas) => {
    for(let x = 0; qtdTrocas > x; qtdTrocas--) {
        vetor.sort(() => Math.random() - 0.5);
    }
}

let bubble_sort = (vetor) => {
    for (let x = 0; x < vetor.length; x++) {
        for (let y = 0; y < vetor.length; y++) {
            if (vetor[y] > vetor[y + 1]) {
                let aux = vetor[y];
                vetor[y] = vetor[y + 1];
                vetor [y + 1] = aux;
            }
        }
    }
    return vetor;
}

