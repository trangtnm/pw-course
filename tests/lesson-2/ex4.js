let myHigh = 170
let canNangLyTuong = 0
let canNangToiDa = 0
let canNangToiThieu = 0

canNangLyTuong = (myHigh % 100) * 9 / 10
canNangToiDa = myHigh % 100
canNangToiThieu = (myHigh % 100) * 8 / 10

console.log("Can Nang Ly Tuong",canNangLyTuong,"Can Nang Toi Da", canNangToiDa, "Can Nang Toi Thieu", canNangToiThieu)