const botao = document.getElementById("btnMensagem");

botao.addEventListener("click", () => {
    alert(
        "O futuro sustentável depende do equilíbrio entre produção agrícola e preservação ambiental."
    );
});

// Contador animado
let contador = 0;
const elemento = document.getElementById("arvores");

const intervalo = setInterval(() => {
    contador += 10;
    elemento.textContent = contador;

    if (contador >= 1000) {
        clearInterval(intervalo);
    }
}, 20);