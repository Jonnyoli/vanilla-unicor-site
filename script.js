
document.getElementById('formulario').addEventListener('submit', function(e) {
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  document.getElementById('mensagem').textContent = `Obrigado, ${nome}! Entraremos em contacto por email.`;
});
