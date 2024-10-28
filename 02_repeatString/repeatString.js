const repeatString = function(string, num) {
    if (string === ''){ // input validation incase user inputs blank string
        return '';
    }
    if (string === 0){ // input validation incase user inputs 0
        return '';
    }
    if (num < 0){ // input validation incase user inputs negative number
        return 'ERROR';
    }

    for (let i = 0; i <=num; i++) {
        return string.repeat(num);
    }
};

// Do not edit below this line
module.exports = repeatString;
