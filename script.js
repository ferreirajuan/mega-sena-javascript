const numeros = [];

function megaSena(n) {
    if (n < 6 || n > 9) {
        console.log("Informe um número entre 6 e 9");
        return [];
    } else {
        numeros.length = 0;
        for (let i = 0; i < n; i++) {
            const numero = Math.floor(Math.random() * 60) + 1;
            if (!numeros.includes(numero)) {
                numeros.push(numero);
            }
        }
        console.log(numeros);
    }
}
