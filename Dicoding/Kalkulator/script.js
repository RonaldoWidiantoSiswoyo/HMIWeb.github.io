// function something(nama, bahasa) {
//   if (bahasa === "english") {
//     return "Hello " + nama + " Good Morning";
//   } else if (bahasa === "japan") {
//     return "Hei " + nama + " Ohayo Gozaimasu ";
//   } else {
//     return "Halo " + nama + " Selamat Pagi";
//   }
// }

// let message = something("ronaldo", "english");
// console.log(message);
// const namaDepan = prompt("Siapa nama depan kamu?");
// const namaBelakang = prompt("Siapa nama belakang kamu?");
// const negaraAsal = prompt("Kamu berasal dari negara mana?");

// const user = {
//   nama: {
//     depan: namaDepan,
//     belakang: namaBelakang,
//   },
//   bahasa: negaraAsal,
// };

// if (user.bahasa === "england") {
//   alert(
//     "Halo" +
//       "" +
//       user.nama.depan +
//       "" +
//       user.nama.belakang +
//       "" +
//       "Good Morning guys"
//   );
// } else if (user.bahasa === "indonesia") {
//   alert(
//     "Halo" +
//       "" +
//       user.nama.depan +
//       "" +
//       user.nama.belakang +
//       "" +
//       "Selamat Pagi"
//   );
// } else {
//   alert(
//     "Hajimemashite, " +
//       user.nama.depan +
//       " " +
//       user.nama.belakang +
//       " Ohayou Gozaimasu"
//   );
// }

// ===============================================================
alert("Selamat kamu sudah berhasil membuat Web Kalkulator!");

const calculator = {
  displayNumber: "0",
  operator: null,
  firstNumber: null,
  waitingForSecondNumber: false,
};
// berfungsi untuk membuat display pada kalkulator menjadi ter update
function updateDisplay() {
  document.querySelector("#displayNumber").innerText = calculator.displayNumber;
}
// membuat display kalkulator menjadi clear atau menjadi 0 lagi
function clearCalculator() {
  calculator.displayNumber = "0";
  calculator.operator = null;
  calculator.firstNumber = null;
  calculator.waitingForSecondNumber = false;
}
// berfungsi untuk memasukkan angka pada kalkulator
function inputDigit(digit) {
  if (calculator.displayNumber === "0") {
    calculator.displayNumber = digit;
  } else {
    calculator.displayNumber += digit;
  }
}
// menginisialisasikan fungsi dari inverse atau perkalian dengan -1
function inverseNumber() {
  if (calculator.displayNumber === "0") {
    return;
  }
  calculator.displayNumber = calculator.displayNumber * -1;
}
// fungsi untuk menetapkan sebuah operator
function handleOperator(operator) {
  if (!calculator.waitingForSecondNumber) {
    calculator.operator = operator;
    calculator.waitingForSecondNumber = true;
    calculator.firstNumber = calculator.displayNumber;

    // mengatur ulang nilai display number supaya tombol selanuutnya dimulai dari angka pertama lagi
    calculator.displayNumber = "0";
  } else {
    alert("Operator sudah ditetapkan");
  }
}
// berfungsi untuk mengkalkulasi atau hasil dari semua angka yang telah dipilih untuk dioperasikan
function performCalculation() {
  if (calculator.firstNumber == null || calculator.operator == null) {
    alert("Anda belum menetapkan Operator");
    return;
  }
  let result = 0;
  if (calculator.operator === "+") {
    result =
      parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
  } else {
    result =
      parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber);
  }
  // calculator.displayNumber = result;

  const history = {
    firstNumber: calculator.firstNumber,
    secondNumber: calculator.displayNumber,
    operator: calculator.operator,
    result: result,
  };
  putHistory(history);
  calculator.displayNumber = result;
  renderHistory();
}
//menginisialisasi kalau tombol bisa diklik dan memberikan nilai sesuai angkanya
const buttons = document.querySelectorAll(".button");
for (let button of buttons) {
  button.addEventListener("click", function (event) {
    //mendapatkan objek elemen yang di klik
    const target = event.target;

    if (target.classList.contains("clear")) {
      clearCalculator();
      updateDisplay();
      return;
    }
    if (target.classList.contains("negative")) {
      inverseNumber();
      updateDisplay();
      return;
    }
    if (target.classList.contains("equals")) {
      performCalculation();
      updateDisplay();
      return;
    }
    if (target.classList.contains("operator")) {
      handleOperator(target.innerText);
      return;
    }
    inputDigit(target.innerText);
    updateDisplay();
  });
}
