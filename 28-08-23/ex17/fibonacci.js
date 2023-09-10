// 17 - Imprimir os 10 primeiros números da sequência de Fibonacci

function fibo(n){
    const seqFibo = [1, 1]; // Inicializando com os primeiros números da sequência
    for (let i = 2; i < n; i++){
        seqFibo[i] =  seqFibo[i - 1] + seqFibo[i - 2];
    }
    return seqFibo;
}

const fibo2 = (n) => {
    const seqFibo = [1, 1];
    for (let i = 2; i < n; i++){
        seqFibo[i] =  seqFibo[i - 1] + seqFibo[i - 2];
    }
    return seqFibo;
}