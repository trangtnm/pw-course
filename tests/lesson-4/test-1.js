let departurePlanet = "Trai Dat";
let mission = "Kham pha Vu tru K16";
let crew = ["Chan", " Bella", " Mi", " Yen"];

function launchShip(crew, mission) {
  console.log(
    `Chuan bi khoi dong! Phi hanh doan gom ${crew} se dong hanh cung ban trong chuyen phieu luu ${mission}.`
  );
}
launchShip(crew, mission);

function calculateDistance(speed, time) {
  let distance = speed * time;
  return distance;
}

console.log(calculateDistance(1000, 24));

function convertTimeToHex(time) {
  let convertedTime = 0;
  convertedTime = time.toString(16);
  return convertedTime;
}

console.log(convertTimeToHex(120));

function decryptCode(code) {
  let decryptCode = [];
  for (let char of code) {
    if (char === char.toLowerCase() && char !== char.toUpperCase()) {
      decryptCode.push(char.toUpperCase());
    } else {
      decryptCode.push(char.toLowerCase());
    }
  }

  return decryptCode.join("");
}

let myText = "K16 Challenge";

console.log(decryptCode(myText));

function returnToEarth() {
  console.log("Chuan bi tro ve Trai Dat !");
}

returnToEarth();
