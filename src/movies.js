// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times 
// in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    
    return moviesArray.map(movies => movies.director);
    return movies.length;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    
    if (moviesArray.length = []) {
    return 0;
}
    const moviesSpielberg = moviesArray.filter (movies => {
        return movies.director  === 'Steven Spielberg' && movies.genre.includes('Drama');
    });
    return moviesSpielberg;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    
    const sumScore = moviesArray.reduce((acc, currentValue) => 
    acc + currentValue.score, 0);
    const aveScore = sumScore / moviesArray.length;
    return parseFloat(aveScore.toFixed(2));

    if (moviesArray.score.length === 0) {
        return 0;
    }
    const emptyScore = moviesArray.reduce((ac, currentValue) => {
    return acc + currentValue});
    return emptyScore / moviesArray.length;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaScore = moviesArray.reduce( (acc, currentValue) => {
    return acc + currentValue.score;
    }, 0) / moviesArray.length;
    return parseFloat(dramaScore.toFixed(2));

    const genreDrama = moviesArray.reduce( (acc, currentValue) => {
    return acc + currentValue.genre.includes('Drama')
    }, 0)
    const aveDrama = genreDrama / moviesArray.length;
    return aveDrama;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    // const newMovies = moviesArray.slice();
    const newMovies = [...moviesArray];
    newMovies.sort( (a, b) => {
        if (a.year > b.year) return 1;
        if (a.year < b.year) return -1;
    
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
    });
        return newMovies;
    }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    // const newAlpha = moviesArray.slice();
    const newAlpha = [...moviesArray];
    const alphaStr = newAlpha.map(item => JSON.stringify(item));
    alphaStr.sort( (a, b) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
    });
    if (alphaStr.length > 20) {
        alphaStr.length = 20;
    };
    return alphaStr;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
     // const newMinutes = moviesArray.slice();
     const newMinutes = [...moviesArray];
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length = []) {
        return null;
    }
}
