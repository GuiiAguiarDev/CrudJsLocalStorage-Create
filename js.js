const dados = document.getElementById("dados");

const btnCadastrar = document.querySelector(".btnCadastrar");

dados.addEventListener("change", handleChange);

const handleStyle = {
  element: btnCadastrar,
  name(value) {
    this.element.innerText = value;
  },

  sobrenome(value) {
    this.element.innerText = value;
  },

  cpf(value) {
    this.element.innerText = value;
  },


  email(value) {
    this.element.innerText = value;
  },

  estado(value) {
    this.element.innerText = value;
  },


  cargo(value) {
    this.element.innerText = value;
  },


  salario(value) {
    this.element.innerText = value;
  },


  dtAdmissao(value) {
    this.element.innerText = value;
  },


 
};

function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;

  handleStyle[name](value);
  saveValues(name, value);
  
}



function saveValues(name, value) {
  localStorage[name] = value;
}
