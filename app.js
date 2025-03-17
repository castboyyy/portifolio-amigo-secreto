let amigos = [];

function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim();

  if (nome === "") {
    alert("Digite um nome válido!");
    return;
  }

  if (amigos.includes(nome)) {
    alert("Este nome já foi adicionado!");
    return;
  }

  amigos.push(nome);
  input.value = "";
  atualizarLista();
}

function atualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((amigo, index) => {
    const li = document.createElement("li");
    li.textContent = amigo;

    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "❌";
    botaoRemover.onclick = () => removerAmigo(index);

    li.appendChild(botaoRemover);
    lista.appendChild(li);
  });
}

function removerAmigo(index) {
  amigos.splice(index, 1);
  atualizarLista();
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Adicione pelo menos 2 amigos para sortear!");
    return;
  }

  let sorteio = [...amigos];
  let resultado = [];

  for (let i = 0; i < amigos.length; i++) {
    let amigo;

    do {
      amigo = sorteio[Math.floor(Math.random() * sorteio.length)];
    } while (amigo === amigos[i]);

    resultado.push(`${amigos[i]} → ${amigo}`);
    sorteio.splice(sorteio.indexOf(amigo), 1);
  }

  exibirResultado(resultado);
}

function exibirResultado(resultado) {
  const listaResultado = document.getElementById("resultado");
  listaResultado.innerHTML = "";

  resultado.forEach((par) => {
    const li = document.createElement("li");
    li.textContent = par;
    listaResultado.appendChild(li);
  });
}
