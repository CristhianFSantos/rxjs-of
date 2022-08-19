import './style.css';

import { of } from 'rxjs';

const database = ['dog', 'cat', 'mouse', 'bird'];

// Operador of (criação)
// Emite uma quantidade variavel de valores em uma sequência e em
// seguida emite uma notificação completa.

const source$ = of(...database);

source$.subscribe((animal) => {
  console.log(animal);
});

// NÃO SE ESQUEÇA DE SEGUIR A PAGINA E COMPARTILHAR OS POSTS,
// PARA INCENTIVAR A PAGINA E ASSIM, SEGUIRMOS COMPARTILHANDO COISAS NOVAS ❤️🚀
