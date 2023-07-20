const contactForm = document.getElementById('contactForm');
const contactTableBody = document.querySelector('#contactTable tbody');

contactForm.addEventListener('submit', function (event) {
event.preventDefault();

const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');

const name = nameInput.value.trim();
const phone = phoneInput.value.trim();

if (name === '' || phone === '') {
    alert('Por favor, preencha todos os campos.');
    return;
}
  // Limpar os campos do formulário após o cadastro
nameInput.value = '';
phoneInput.value = '';

  // Adicionar o contato à tabela
const newRow = contactTableBody.insertRow();
const nameCell = newRow.insertCell(0);
const phoneCell = newRow.insertCell(1);

nameCell.textContent = name;
phoneCell.textContent = phone;
});
