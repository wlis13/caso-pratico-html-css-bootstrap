document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const campos = ["nome", "apelido", "email", "mensagem"];
  let valido = true;

  campos.forEach(id => {
    if (document.getElementById(id).value === "") {
      valido = false;
    }
  });

  if (valido) {
    document.getElementById("sucesso").innerText =
      "Formulário enviado com sucesso!";
  } else {
    alert("Por favor, preencha todos os campos obrigatórios.");
  }
});
