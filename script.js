let imgBox = document.getElementById("generated-qr");
let qrImg = document.getElementById("qr-image");
let qrText = document.getElementById("qrtext");

function generateQR() {
  qrImg.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
    qrText.value;
  document.getElementById("generated-qr").style.display = "block";
}

document.getElementById("button").addEventListener("click", (e) => {
  e.preventDefault();
  generateQR();
  console.log(qrImg.src);
});
