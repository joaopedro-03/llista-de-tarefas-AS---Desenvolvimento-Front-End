

const nomeTarefa = document.getElementById("nomeTarefa");
const prioridade = document.getElementById("prioridade");
const btnAdicionar = document.getElementById("btnAdicionar");

const listaPendentes = document.getElementById("listaPendentes");
const listaConcluidas = document.getElementById("listaConcluidas");

const contadorPendentes = document.getElementById("contadorPendentes");
const contadorConcluidas = document.getElementById("contadorConcluidas");

const erro = document.getElementById("erro");


const cabecalho = document.querySelector("header");

let pendentes = 0;
let concluidas = 0;


function atualizarContadores() {
    contadorPendentes.textContent = pendentes;
    contadorConcluidas.textContent = concluidas;
}


btnAdicionar.addEventListener("click", adicionarTarefa);


function adicionarTarefa() {

    const texto = nomeTarefa.value.trim();

    
    if (texto === "") {

        erro.textContent = "Digite uma tarefa antes de adicionar.";

        // Uso de style
        erro.style.color = "red";

        return;
    }

    
    erro.classList.remove("hidden");
    erro.textContent = "";

    
    const tarefa = document.createElement("div");

    tarefa.classList.add(
        "p-4",
        "rounded",
        "mb-3",
        "text-white",
        "flex",
        "justify-between",
        "items-center",
        "flex-wrap",
        "gap-2"
    );

    
    if (prioridade.value === "alta") {
        tarefa.classList.add("bg-red-500");
    }

    if (prioridade.value === "media") {
        tarefa.classList.add("bg-yellow-400");
    }

    if (prioridade.value === "baixa") {
        tarefa.classList.add("bg-green-500");
    }

    const info = document.createElement("div");

    info.innerHTML = `
        <strong>${texto}</strong><br>
        Prioridade: ${prioridade.value}
    `;

    const areaBotoes = document.createElement("div");

    const btnConcluir = document.createElement("button");
    btnConcluir.textContent = "Concluir";

    btnConcluir.classList.add(
        "bg-blue-600",
        "hover:bg-blue-700",
        "px-3",
        "py-1",
        "rounded"
    );

    const btnExcluir = document.createElement("button");
    btnExcluir.textContent = "Excluir";

    btnExcluir.classList.add(
        "bg-gray-800",
        "hover:bg-gray-900",
        "px-3",
        "py-1",
        "rounded",
        "ml-2"
    );

    areaBotoes.appendChild(btnConcluir);
    areaBotoes.appendChild(btnExcluir);

    tarefa.appendChild(info);
    tarefa.appendChild(areaBotoes);

    listaPendentes.appendChild(tarefa);

    pendentes++;
    atualizarContadores();

    nomeTarefa.value = "";

    
    btnExcluir.addEventListener("click", () => {

        tarefa.remove();

        pendentes--;

        atualizarContadores();
    });


    btnConcluir.addEventListener("click", () => {

        const dataAtual = new Date();

        const historico = document.createElement("div");

        historico.classList.add(
            "p-3",
            "rounded",
            "mb-3",
            "border"
        );

        
        if (prioridade.value === "alta") {
            historico.classList.add("bg-red-100");
        }

        if (prioridade.value === "media") {
            historico.classList.add("bg-yellow-100");
        }

        if (prioridade.value === "baixa") {
            historico.classList.add("bg-green-100");
        }

        historico.innerHTML = `
            <strong>${texto}</strong><br>
            Prioridade: ${prioridade.value}<br>
            Data: ${dataAtual.toLocaleDateString()}<br>
            Horário: ${dataAtual.toLocaleTimeString()}
        `;

        listaConcluidas.appendChild(historico);

        tarefa.remove();

        pendentes--;
        concluidas++;

        atualizarContadores();
    });
}