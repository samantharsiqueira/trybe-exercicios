import Swal from 'sweetalert2';

const name = document.getElementById('name');
const img = document.getElementById('image');
const button = document.getElementById('button');

// Essa é a URL base da API.
const BASE_URL = 'https://akabab.github.io/superhero-api/api';
const MAX_HEROES = 1000;

// Randon supehero
const randomId = () => Math.floor(Math.random() * MAX_HEROES);

button.addEventListener('click', (event) => {
  event.preventDefault();
  const id = randomId();

  // Faremos o fetch utilizando nossa URL e o id gerado
  fetch(`${BASE_URL}/id/${id}.json`)
  // Após o fetch, devemos extrair o objeto com a função .json()
    .then((result) => result.json())
    .then((data) => {
      // Uma vez extraído, vamos recuperar as informações
      // que precisamos. No caso, a imagem e o nome
      img.src = data.images.md;
      name.innerHTML = data.name;
    })
    // Caso haja erro, nós tratamos o mesmo com o .catch()
    .catch((error) => Swal.fire({
      // Aqui, estamos usando a nossa biblioteca, mas
      // você pode usar a função window.alert() também
      title: 'Hero not found',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Cool',
    }));
});
