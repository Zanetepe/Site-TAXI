const input = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

const expand = () => {
  searchBtn.classList.toggle("close");
  input.classList.toggle("square");
};

searchBtn.addEventListener("click", expand);

const pontosConhecidos = {
  "1": "Rodoviária",
  "2": "Júlio com a Feijor Júnior",
  "3": "Marquês do Erval na Praça",
  "4": "Moreira com a Sinimbu",
  "5": "Senac, Júlio, Prédio Léo",
  "6": "Visconde com a Júlio",
  "7": "Doutor Montauri com a Júlio",
  "8": "Sarmento Leite com a Rio Branco (Magazine Luiza)",
  "9": "Imigrante",
  "10": "Postão",
  "11": "Manhabosco",
  "12": "Farmácia Central",
  "13": "Edifício Estrela",
  "14": "Marquês do Erval com a Sinimbu",
  "15": "Angelina Miquelou com a Luiz Miquelon",
  "16": "Luiz Miquelou com a BR",
  "17": "Visconde de Pelotas com a Pinheiro Machado",
  "18": "Shopping São Pelegrino",
  "19": "Rio Branco, Prédio do Vini",
  "20": "Borges de Medeiros com a Júlio (Livraria Rossi)",
  "21": "Pompeia",
  "22": "Moreira César com a Júlio",
  "23": "Alfredo Chaves com a Júlio (Zanuzzi)",
  "24": "Coronel Flores com a Júlio (Tata)",
  "25": "13 de Maio com a Júlio (Churrascaria 13 de Maio)",
  "26": "Guia Lopes com a Júlio",
  "27": "Randon",
  "28": "Secretaria de Trânsito",
  "29": "Menu Lanches",
  "30": "Via Atacadista",
  "31": "20 de Setembro com a Feijor (Pão quente)",
  "32": "Tronca com a Garibaldi",
  "33": "Centro",
  "34": "Centro",
  "35": "Moreira César, Próximo Pai, O Pio X",
  "36": "Cruzeiro",
  "37": "Madri Milda",
  "38": "Garibaldi com A bento",
  "39": "Hospital Fátima",
  "40": "Andreazza da Rio Branco",
  "41": "Vantajão da Moreira",
  "42": "Conselheiro Dantas com a Irma Zago",
  "43": "Andreazza do Kaiser",
  "44": "MarcoPolo Planalto",
  "45": "Andrezza do Sagrada",
  "46": "Andrezza Petrópolis",
  "47": "Hospital do Círculo",
  "51": "Posto Capuani Serrano",
  "52": "Andrezza Bela Vista",
  "54": "Andressa Santa Lúcia",
  "56": "Iguatemi",
  "59": "Fórum",
  "60": "Pizzaria Giordani (Santa Catarina)",
  "61": "Procon",
  "62": "Pioneiro Bairro",
  "63": "Andressa do Fátima",
  "64": "Upa (Santa Fé)",
  "65": "Cartório Marcos",
  "66": "Cic",
  "67": "Posto Margarida",
  "72": "Unimed",
  "73": "Marques do Erval com Ernesto",
  "74": "Posto Rodeio (Próximo Labirra)",
  "76": "20 de Setembro, Zafari",
  "77": "18 do Forte com Andrade Neves",
  "78": "City Life",
  "79": "Vantajão da São Leopoldo"
};

function pesquisarPonto() {
  const pontoDesejado = input.value;
  const pontoEncontrado = pontosConhecidos[pontoDesejado];
  if (pontoEncontrado) {
    exibirModal(pontoEncontrado);
  } else {
    exibirModal("Ponto não encontrado.");
  }
  input.value = "";
}

function exibirModal(texto) {
  const modal = document.getElementById("myModal");
  const modalText = document.getElementById("modalText");

  modalText.textContent = texto;
  modal.style.display = "flex";

  setTimeout(function() {
    modal.style.display = "none";
  }, 3000);
}

function adicionarNumero(numero) {
  input.value += numero;
}

function apagarNumero() {
  input.value = input.value.slice(0, -1);
}

function fecharModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}

document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    pesquisarPonto();
  }
});
