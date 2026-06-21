# DOCUMENTAÇÃO TÉCNICA

## Projeto: Lista de Tarefas Interativa

### Disciplina: Desenvolvimento Front-End

### Tecnologias Utilizadas

* HTML5
* Tailwind CSS
* JavaScript
* Manipulação do DOM

---

# 1. INTRODUÇÃO

O presente projeto consiste no desenvolvimento de uma aplicação web de Lista de Tarefas Interativa. O sistema permite cadastrar tarefas, definir prioridades, concluir atividades, excluir tarefas e manter um histórico das tarefas finalizadas.

O objetivo principal foi aplicar os conhecimentos adquiridos em HTML, Tailwind CSS e JavaScript, utilizando conceitos de manipulação do DOM, eventos, responsividade e organização visual da interface.

---

# 2. ESTRUTURA DO PROJETO

A estrutura do projeto foi organizada da seguinte forma:

projeto/

├── index.html

├── js/

│ └── script.js

└── docs/

└── documentacao.pdf

## index.html

Arquivo responsável pela estrutura da aplicação.

Nele estão definidos:

* Cabeçalho da página;
* Formulário de cadastro de tarefas;
* Legenda de prioridades;
* Contadores dinâmicos;
* Lista de tarefas pendentes;
* Histórico de tarefas concluídas.

Também é realizado o carregamento do Tailwind CSS e do arquivo JavaScript.

## script.js

Arquivo responsável por toda a lógica da aplicação.

Funções principais:

* Adicionar tarefas;
* Validar campos;
* Excluir tarefas;
* Concluir tarefas;
* Atualizar contadores;
* Registrar data e hora de conclusão;
* Manipular elementos do DOM dinamicamente.

## documentacao.pdf

Arquivo destinado à documentação técnica do projeto, contendo explicações sobre a implementação, conceitos utilizados e evidências do funcionamento do sistema.

---

# 3. FUNCIONALIDADES IMPLEMENTADAS

## Adição de Tarefas

O usuário pode:

* Digitar o nome da tarefa;
* Selecionar uma prioridade;
* Clicar no botão "Adicionar".

Após isso, a tarefa é inserida automaticamente na lista de tarefas pendentes.

### Validação

O sistema impede a criação de tarefas vazias.

Caso o usuário tente adicionar uma tarefa sem preencher o campo, uma mensagem de erro é exibida.

---

## Legenda de Prioridades

Foi criada uma legenda visual para representar os níveis de prioridade:

* Alta → Vermelho
* Média → Amarelo
* Baixa → Verde

As mesmas cores são aplicadas visualmente às tarefas cadastradas.

---

## Exclusão de Tarefas

Cada tarefa possui um botão "Excluir".

Ao clicar nesse botão:

* A tarefa é removida do DOM;
* O contador de tarefas pendentes é atualizado automaticamente.

---

## Conclusão de Tarefas

Cada tarefa possui um botão "Concluir".

Ao clicar nesse botão:

* A tarefa é removida da lista de pendentes;
* É adicionada ao histórico de tarefas concluídas;
* Os contadores são atualizados automaticamente.

---

## Histórico de Concluídas

Ao concluir uma tarefa, o sistema registra:

* Nome da tarefa;
* Prioridade;
* Data da conclusão;
* Horário da conclusão.

Essas informações permanecem armazenadas visualmente no histórico até que a página seja atualizada.

---

## Contadores Dinâmicos

O sistema apresenta:

* Quantidade de tarefas pendentes;
* Quantidade de tarefas concluídas.

Os valores são atualizados automaticamente sempre que:

* Uma tarefa é adicionada;
* Uma tarefa é concluída;
* Uma tarefa é removida.

---

## Responsividade

A aplicação foi desenvolvida utilizando os breakpoints do Tailwind CSS.

### Smartphones

Layout em coluna única.

### Tablets

Melhor aproveitamento dos espaços e ajustes de largura.

### Notebooks e Desktops

Exibição em múltiplas colunas para melhor organização do conteúdo.

Foram utilizados:

* sm:
* md:
* lg:

para adaptar o comportamento da interface.

---

# 4. EXPLICAÇÃO DOS MÉTODOS DE DOM UTILIZADOS

## document.getElementById()

Utilizado para selecionar elementos através do atributo id.

Exemplo:

const nomeTarefa = document.getElementById("nomeTarefa");

Permite acessar diretamente o campo de texto da tarefa.

---

## document.querySelector()

Seleciona o primeiro elemento correspondente a um seletor CSS.

Exemplo:

const cabecalho = document.querySelector("header");

Permite acessar o elemento header da página.

---

## document.createElement()

Cria elementos HTML dinamicamente.

Exemplo:

const tarefa = document.createElement("div");

Esse método é utilizado para criar os cards das tarefas.

---

## element.appendChild()

Adiciona um elemento filho dentro de outro elemento.

Exemplo:

listaPendentes.appendChild(tarefa);

Utilizado para inserir uma nova tarefa na lista.

---

## element.classList.add()

Adiciona classes CSS a um elemento.

Exemplo:

tarefa.classList.add("bg-red-500");

Utilizado para aplicar cores de prioridade utilizando Tailwind CSS.

---

## element.classList.remove()

Remove classes CSS de um elemento.

Exemplo:

erro.classList.remove("hidden");

Permite remover estilos previamente aplicados.

---

## element.addEventListener()

Adiciona eventos aos elementos da página.

Exemplo:

btnAdicionar.addEventListener("click", adicionarTarefa);

Permite executar ações quando o usuário interage com a interface.

---

## element.style

Permite alterar estilos diretamente por JavaScript.

Exemplo:

erro.style.color = "red";

Pode ser utilizado para alterar características visuais dinamicamente.

---

## Aplicação dinâmica de classes Tailwind CSS

As classes são adicionadas conforme a prioridade escolhida.

Exemplo:

tarefa.classList.add("bg-red-500");

Dessa forma, a tarefa recebe a cor correspondente à prioridade selecionada.

---

## element.remove()

Remove elementos do DOM.

Exemplo:

tarefa.remove();

Utilizado para excluir tarefas ou removê-las da lista de pendentes após serem concluídas.

---

## Transferência de tarefas entre listas

Quando uma tarefa é concluída:

1. A tarefa é removida da lista de pendentes;
2. Um novo elemento é criado;
3. Esse elemento é adicionado ao histórico de concluídas.

Isso representa uma movimentação lógica entre duas seções da aplicação.

---

# 5. CAPTURAS DE TELA

Inserir as seguintes imagens:

## Figura 1 – Tela Inicial

Inserir captura da aplicação ao abrir a página.

---

## Figura 2 – Cadastro de Tarefa

Inserir captura após adicionar uma tarefa.

---

## Figura 3 – Histórico de Concluídas

Inserir captura mostrando tarefas concluídas com data e hora.

---

## Figura 4 – Responsividade

Inserir captura da aplicação em resolução reduzida simulando smartphone.

---

# 6. CONSIDERAÇÕES FINAIS

Durante o desenvolvimento deste projeto foi possível aplicar diversos conceitos fundamentais do desenvolvimento Front-End.

Foram utilizados conhecimentos relacionados à estruturação de páginas com HTML, estilização utilizando Tailwind CSS e manipulação dinâmica do DOM através de JavaScript.

Entre os principais aprendizados destacam-se:

* Criação dinâmica de elementos HTML;
* Manipulação do DOM;
* Tratamento de eventos;
* Atualização automática de informações na interface;
* Utilização de classes do Tailwind CSS;
* Desenvolvimento de layouts responsivos.

A principal dificuldade encontrada foi organizar a manipulação das tarefas e manter os contadores sempre atualizados. Esse problema foi resolvido através da criação de uma função específica para atualizar os valores sempre que ocorresse alguma alteração no sistema.

O projeto permitiu consolidar os conceitos estudados em aula e compreender melhor a integração entre HTML, CSS e JavaScript na construção de aplicações web interativas.

---

# CONCLUSÃO

O sistema desenvolvido atende aos requisitos propostos no trabalho, permitindo o gerenciamento de tarefas de forma simples, organizada e responsiva, utilizando exclusivamente as tecnologias estudadas durante a disciplina.
