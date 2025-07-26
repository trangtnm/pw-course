let sum = 0
for (let i = 1; i <= 100; i++) {
    sum = sum + i
}
console.log (sum)



for (let i = 2; i <= 9; i++) {
    // in bang cuu chuong i
    console.log('Bang cuu chuong ', i)
    for (let j = 1; j <= 10; j++) {
        console.log(i * j)
    }
}

let array = []
for (let i = 1; i <= 99; i++) {
    if (i % 2 === 1) {
        array.push(i)
    }
}

console.log(array)



for (let i = 1; i<=10; i++) {
    console.log (`user`+ i + `@example.com`)
}



let doanhThuTrongNam = []
for (let month = 1; month <= 12; month++ ) {
    doanhThuTrongNam.push(
        {
            "month": month,
            "total": Math.floor(Math.random() * 10)* 10
        }
    )
}

let total = 0
console.log(doanhThuTrongNam)
for (let j = 0; j <= 11; j++) {
    total = total + doanhThuTrongNam[j].total
}
console.log(total)

