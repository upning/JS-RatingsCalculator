'use strict'

let collect_ratings = () => {
    let ratings = {
        'count': 0,
        'sum': 0,
        'average': 0
    };
    let rating = 0;

    let elements = document.querySelectorAll(".rating"); // .rating to select all elements with "rating" class, or you can "input.rating" to specify

    elements.forEach( element => {
        rating = parseInt(element.id.replace('star', ''));
        ratings.count += parseInt(element.value);
        ratings.sum += rating * parseInt(element.value);
    } );

    if  (ratings.count !== 0) {
        ratings.average = parseFloat(ratings.sum / ratings.count);
    }
    return ratings;
}

function financial(x, limits) {
    return Number.parseFloat(x).toFixed(limits);
}

document.addEventListener('change', () => {    
    let ratings = collect_ratings();
    document.querySelector("#average").value = ratings.average.toFixed(2);
} );