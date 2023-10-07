const personalMovieDb = {
  count: 0,
  movies: {},
  actors: {},
  genres: new Set(),
  privat: false,
};

function f1(event) {
  event.preventDefault();
  let filmCount = +document.querySelector('#i-filmCount').value;
  let lastFilm = document.querySelector('#i-lastFilm').value;
  let filmMark = +document.querySelector('#i-filmMark').value;
  let filmGenre = document.querySelector('#i-filmGenre').value;

  personalMovieDb.count += filmCount;
  personalMovieDb.movies[lastFilm] = filmMark;
  personalMovieDb.genres.add(filmGenre);

  console.log(personalMovieDb);
}

document.querySelector('#btn-submit').addEventListener('click', f1);
