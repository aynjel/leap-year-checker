document.querySelector('#leap-year-form').addEventListener('submit', function (e) {
    e.preventDefault();

    var year = document.querySelector('#year').value;
    var yearResult = document.querySelector('#year-result');
    var leapYearResult = document.querySelector('#leap-year-result');

    yearResult.innerHTML = year;

    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                leapYearResult.innerHTML = 'is a leap year!';
            } else {
                leapYearResult.innerHTML = 'is not a leap year!';
            }
        } else {
            leapYearResult.innerHTML = 'is a leap year!';
        }
    }
    else {
        leapYearResult.innerHTML = 'is not a leap year!';
    }

    document.querySelector('.result').style.display = 'flex';
    
});
    

document.querySelector('#reset').addEventListener('click', function () {
    document.querySelector('.result').style.display = 'none';
});