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
    
    if (moviesArray === 0 || !moviesArray.director === 'Steven Spielberg') {
    return 0;
} else {
    const moviesSpielberg = moviesArray.filter (movies => {
        return movies.director  === 'Steven Spielberg' && movies.genre.includes('Drama');
    }).map((item) => item.director);
    return moviesSpielberg.length;
}
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (moviesArray.length === 0) {
    return 0;
} else {
    const sumScore = moviesArray.reduce((acc, currentValue) => {
    if (typeof currentValue.score === 'number') {
        return acc + currentValue.score;
    } else {
        return acc;
    }
}, 0);
    const average = sumScore / moviesArray.length;
    const avgMathTwoDec = Math.round(average * 100) / 100;
    return avgMathTwoDec;
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaScore = moviesArray.filter((item) => {
        return item.genre.includes('Drama');
    });
    if (dramaScore.length === 0) {
        return 0;
    }
    const sumAllScore = dramaScore.reduce((acc, currentValue) => {
        if (typeof currentValue.score === 'number') {
            return acc + currentValue.score;
        } else {
            return acc;
        }
    }, 0);
    const average = sumAllScore / dramaScore.length;
    const avgMathTwoDec = Math.round(average * 100) / 100;
    return avgMathTwoDec;
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
    
    let newAlpha = moviesArray.map((item) => {
        return item.title;
    }).sort().slice(0, 20);

    return newAlpha;
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
