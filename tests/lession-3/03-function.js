function multiply (a, b) {
    const multiplication = a * b;
    return multiplication
}

console.log(multiply(5, 8))
console.log(multiply(2, 6))



function findMin (a, b, c) {
    let min = a;
    if (b <= min) {
        min = b
    }

    if (c <= min) {
        min = c
    }

    return min
}

console.log('min: ', findMin(4,5,3))
console.log('min: ', findMin(5,5,7))




function getTopstudents (students, threshold) {
    let greaterThanThreshold = []
    for (let i = 0; i <= students.length - 1; i++) {
        if (students[i].score >= threshold) {
            greaterThanThreshold.push(students[i].name)
        }
    }

    return greaterThanThreshold
}

let myStudents = [
    {
        name: 'minh',
        score: 2
    }, 
    {
        name: 'trang',
        score: 10
    },
    {
        name: 'tran',
        score: 6
    },
    {
        name: 'nam',
        score: -5
    },
]
let threshold = -3

console.log(getTopstudents(myStudents, threshold))



function calculateInterest (principal, rate, years) {
    let total = principal + principal * rate * years / 100
    return total
}

console.log(calculateInterest(100000000, 5, 6))