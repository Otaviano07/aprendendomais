function removerAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function gerarSlug(texto) {
    var slug = removerAcentos(texto.toLowerCase()).replace(/[^a-z0-9]+/g, "-");
    return slug;
}

function mascaraTelefone(input) {
  input.value = input.value.replace(/[^\d()\-]/g, "");

  if (input.value.match(/[^\d()\-]/)) {
    alert("Digite somente números no campo de telefone.");
    input.value = input.value.replace(/[^\d()\-]/g, "");
  }
}

function gerarLink() {
  var nomeEstudoBiblico = gerarSlug(document.getElementById("nomeEstudoBiblico").value);
  var numEstudoBiblico = gerarSlug(document.getElementById("numEstudoBiblico").value);
  var nomeProfessor = document.getElementById("nomeProfessor").value;
  var nomeEstudante = document.getElementById("nomeEstudante").value;
  var contatoProfessor = document.getElementById("contatoProfessor").value;
  var contatoEstudante = document.getElementById("contatoEstudante").value;

  var linkBase = "https://otaviano07.github.io/aprendendomais/";

  var linkGerado = linkBase + nomeEstudoBiblico + '/' + numEstudoBiblico + '/index.html' + "?nomeEstudoBiblico=" + encodeURIComponent(nomeProfessor) + "&nomeestudante=" + encodeURIComponent(nomeEstudante) + "&contatoProfessor=" + contatoProfessor;

  document.getElementById("linkGerado").value = linkGerado;
}

function copiarLink() {
  var linkGerado = document.getElementById('linkGerado');
  linkGerado.select();
  linkGerado.setSelectionRange(0, 99999);
  document.execCommand('copy');
  alert('Link copiado para a área de transferência!');
}

const nomeInput = document.getElementById('nomeEstudoBiblico');
const numeroInput = document.getElementById('numEstudoBiblico');
const numeroPorNome = {
  'Ouvindo a Voz de Deus': ['01 - A Bíblia Sagrada', '02 - A beleza da criação', '03 - A origem do mal', '04 - O plano da salvação', '05 - Fé, arrependimento e confissão', '06 - Sinais da volta de Cristo', '07 - A volta de Cristo', '08 - O Milênio', '09 - A verdade sobre a morte', '10 - A nova terra', '11 - Salvação pela graça', '12 - O Santuário', '13 - O Juízo', '14 - As leis na Bíblia', '15 - A Lei Moral', '16 - O mandamento esquecido', '17 - Do sábado para o domingo', '18 - Princípios de Saúde', '19 - O dom de profecia', '20 - O dízimo', '21 - As ofertas', '22 - A igreja verdadeira', '23 - O Batismo', '24 - Princípios de vida Cristã', '25 - Educação Cristã', '26 - Vida no Espírito', '27 - Ministério para Todos'],
  'Ensinos de Jesus': ['01 - O que JESUS ensinou sobre as ESCRITURAS', '02 - O que JESUS ensinou sobre a SALVAÇÃO', '03 - O que JESUS ensinou sobre a SANTIFICAÇÃO', '04 - O que JESUS ensinou sobre o ESPÍRITO SANTO', '05 - O que JESUS ensinou sobre a ORAÇÃO', '06 - O que JESUS ensinou sobre o PERDÃO', '07 - O que JESUS ensinou sobre o DINHEIRO', '08 - O que JESUS ensinou sobre SUA VOLTA', '09 - O que JESUS ensinou sobre a MORTE', '10 - O que JESUS ensinou sobre a RESSURREIÇÃO', '11 - O que JESUS ensinou sobre o JUÍZO', '12 - O que JESUS ensinou sobre a LEI', '13 - O que JESUS ensinou sobre o SÁBADO', '14 - O que JESUS ensinou sobre a IGREJA', '15 - O que JESUS ensinou sobre os PROFETAS', '16 - O que JESUS ensinou sobre o BATISMO', '17 - O que JESUS ensinou sobre o CUIDADO COM O CORPO', '18 - O que JESUS ensinou sobre ritos e TRADIÇÕES']
};

nomeInput.addEventListener('change', function () {
  const selectedNome = this.value;
  const numero = numeroPorNome[selectedNome] || [];
  const datalist = document.getElementById('numero');

  // Limpar as opções atuais da lista
  datalist.innerHTML = '';

  // Adicionar as novas opções filtradas
  numero.forEach(function (numero) {
    const option = document.createElement('option');
    option.value = numero;
    datalist.appendChild(option);
  });
});