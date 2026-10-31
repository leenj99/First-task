import { fetchUsers } from './api.js';

let allUsers = [];

function createUserCard(user) {
  const { name, email, phone } = user;
  const phoneHTML = phone ? `<p><strong>Phone:</strong> ${phone}</p>` : '';

  return `
    <div class="card">
      <h3>${name}</h3>
      <p><strong>Email:</strong> ${email}</p>
      ${phoneHTML}
    </div>
  `;
}

function renderUsers(usersToRender) {
  const container = document.getElementById('users-list');
  if (!container) return;

  const cardsHtml = usersToRender.map((user) => createUserCard(user));
  container.innerHTML = cardsHtml.join('');
}
0.

function filterUsersByKeyword(keyword) {
  return allUsers.filter((user) => 
    user.name.toLowerCase().includes(keyword.toLowerCase())
  );
}

async function init() {
  allUsers = await fetchUsers();
  renderUsers(allUsers);

  const form = document.getElementById('search-form');
  const searchInput = document.getElementById('search-input');

  if (form && searchInput) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const keyword = searchInput.value.trim();
      const filtered = filterUsersByKeyword(keyword);
      renderUsers(filtered);
    });
  }
}

init();