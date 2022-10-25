function sum(numbers) {
    return numbers.reduce((prev, curr) => prev + curr, 0);
}
function avg(numbers) {
    return sum(numbers) / numbers.length;
}
function max(numbers) {
    return numbers.reduce((max, curr) => (max > curr ? max : curr), numbers[0]);
}
function med(numbers) {
    numbers.sort((previous, current) => previous-current);
    if (numbers.length %2 ==0) {
        result = (numbers[numbers.length/2] + numbers[numbers.length/2 - 1])/2;
    } else {
        result = numbers[(numbers.length-1)/2];
    }
    return result;
}
function iqr(numbers) {
    let s1, s2, q1, q3;
    numbers.sort((previous, current) => previous-current);
    if(numbers.length%2 ==0) {
        s1 = numbers.slice(0, numbers.length/2);
        s2 = numbers.slice(numbers.length/2, numbers.length);
    } else {
        s1 = numbers.slice(0, (numbers.length -1)/2);
        s2 = numbers.slice((numbers.length + 1)/2, numbers.length);
    }
    q1 = med(s1);
    q3 = med(s2);
    return [Math.abs(q1 - q3), s1, s2];
}

function outlier(numbers) {
    let result = [];

    let s1 = iqr(numbers)[1];
    let s2 = iqr(numbers)[2];
    let temp = iqr(numbers)[0];
    // console.log("iqr:", temp);
    // console.log("s1:", s1);
    // console.log("s2:", s2);
    let q1 = med(s1);
    let q3 = med(s2);
    // console.log("q1 q3:", q1, q3);

    let lowerBound = q1 - 1.5 * temp; 
    let upperBound = q3 + 1.5 * temp;

    // console.log("Bounds:", lowerBound, upperBound);

    for (let i=0; i<numbers.length; i++) {
        if (numbers[i] < lowerBound ) {
            result.push(numbers[i]);
        } else if (numbers[i] > upperBound) {
            result.push(numbers[i]);
        }
    }
    return result;
}
module.exports = {
    sum,
    avg,
    max,
    med,
    iqr,
    outlier,
};