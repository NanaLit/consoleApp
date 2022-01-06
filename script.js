'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = +prompt('На сколько оцените его?', '');
        
        if  (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('Вы киноман');
    } else if (personalMovieDB.count >= 30) {
        alert('Вы классический зритель');
    } else {
        alert('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat == true) {
        console.log(`Да, я смотрю порнушку ${personalMovieDB}`);
    } else {
        console.log('я не старик-извращенец');
        return;
    }
}
showMyDB();
// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }
// showMyDB(personalMovieDB);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
    }
}

writeYourGenres();
console.log(personalMovieDB);





