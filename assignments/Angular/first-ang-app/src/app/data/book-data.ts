import { Book } from '../book';

export const BOOKS: Book[] = [
  {
    id: randomId(),
    title: 'goosebumps',
    author: 'r.l. stein',
    pages: 567,
    year: 1995,
    publisher: 'goosebumps inc.',
  },
  {
    id: randomId(),
    title: 'pootie tang',
    author: 'louis ck',
    pages: 100,
    year: 2003,
    publisher: 'paramount',
  },
];

function randomId() {
  return Math.round(Math.random() * 1000);
}
