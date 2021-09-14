function converteMoedas() {
    const moeda = {
        real: 1,
        euro: 6.17,
        dolar: 5.21,
        libra: 7.24,
        peso: 0.053,
        bitcoin: 244216.93,
        ethereum: 17537.90
    }

    const moeda1 = document.getElementById("moeda1").value;

    const moeda2 = document.getElementById("moeda2").value;

    const valor = document.querySelector("#valor").value;

    let valor2 = valor * (moeda[moeda1] / moeda[moeda2]);

    let valorCorrigido = valor2.toFixed(2);

    document.getElementById("conversao").innerHTML = `O valor convertido é: ${valorCorrigido}`;
}
