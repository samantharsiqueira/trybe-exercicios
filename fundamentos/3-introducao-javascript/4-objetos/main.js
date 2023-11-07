const reader = {
  name: 'Julia',
  lastName: 'Pessoa',
  age: 21,
  favoriteBooks: [
    {
      title: 'O Senhor dos Anéis - a Sociedade do Anel',
      author: 'J. R. R. Tolkien',
      publisher: 'Martins Fontes',
    },
  ],
};

// para acessar um valor, nao precisa de função, precisa apenas da objeto.chave 
// para acessar um array como o favoriteBooks precisa do objeto.array[index].chave 

console.log(`O livro favorito de ${reader.name} ${reader.lastName} se chama "${reader.favoriteBooks[0].title}`);

// Para inserir um novo array em um array, voce coloca o objeto.array.push ({novoArray})

reader.favoriteBooks.push(
  {
  title: 'Harry Potter e o Prisioneiro de Azkaban',
  author: 'JK Rowling',
  publisher: 'Rocco',
})

console.log(reader.favoriteBooks);

const numFavoriteBooks = reader.favoriteBooks.length;
numFavoriteBooks > 1  // a condicao fica como se fosse o IF/ELSE 

? console.log(` ${reader.name} tem ${numFavoriteBooks} livros favoritos.`) // depois do ? fica como o if 
: console.log(` ${reader.name} tem ${numFavoriteBooks} livro favorito.`)// esse eh o else, se for falso

//Esse ? : chama operador ternario.  