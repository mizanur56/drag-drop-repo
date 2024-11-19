// const dragBody = document.querySelector(".appbody"),
//   dragText = dragBody.querySelector("h1"),
//   dragButton = dragBody.querySelector("button"),
//   dragInput = dragBody.querySelector("input");

// //   global variable
// let myFile;

// // button
// dragButton.onclick = () => {
//   dragInput.click();
// };

// // add file progress
// dragInput.addEventListener("change", function () {
//   myFile = this.files[0];
//   dragBody.classList.add("active");
//   showMe();
// });
// // text change when drop iamge
// dragBody.addEventListener("dragover", (event) => {
//   event.preventDefault();
//   dragBody.classList.add("active");
//   dragText.textContent = "Release to upload file";
// });
// // text change when drop over

// dragBody.addEventListener("dragleave", () => {
//   dragBody.classList.remove("active");
//   dragText.textContent = "Drag & Drop";
// });
// // showing data progress
// dragBody.addEventListener("drop", (event) => {
//   event.preventDefault();
//   myFile = event.dataTransfer.files[0];
//   showMe();
// });

// function showMe() {
//   let fileType = myFile.type;
//   let validEx = ["image/jpg", "image/jpeg", "image/png"];

//   if (validEx.includes(fileType)) {
//     let fileReader = new FileReader();

//     fileReader.onload = () => {
//       let imgUrl = fileReader.result;
//       let img = `<img src="${imgUrl}" alt=""`;
//       dragBody.innerHTML = img;
//     };
//     fileReader.readAsDataURL(myFile);
//   } else {
//     alert("This file is not valid");
//     dragBody.classList.remove("active");
//     dragText.textContent = "Drag & Drop";
//   }
// }
const dragBody = document.querySelector(".appbody"),
  dragText = dragBody.querySelector("h1"),
  dragButton = dragBody.querySelector("button"),
  dragInput = dragBody.querySelector("input");

// Global variable
let myFile;

// Button to trigger file input
dragButton.onclick = () => dragInput.click();

// Handle file selection via input
dragInput.addEventListener("change", function () {
  myFile = this.files[0];
  dragBody.classList.add("active");
  processFile();
});

// Handle drag events
dragBody.addEventListener("dragover", (event) => {
  event.preventDefault();
  dragBody.classList.add("active");
  dragText.textContent = "Release to upload file";
});

dragBody.addEventListener("dragleave", () => {
  dragBody.classList.remove("active");
  dragText.textContent = "Drag & Drop";
});

dragBody.addEventListener("drop", (event) => {
  event.preventDefault();
  myFile = event.dataTransfer.files[0];
  processFile();
});

// Process and preview the file
function processFile() {
  const validEx = ["image/jpg", "image/jpeg", "image/png"];

  if (myFile && validEx.includes(myFile.type)) {
    const fileReader = new FileReader();

    fileReader.onload = () => {
      const imgUrl = fileReader.result;
      dragBody.innerHTML = `<img src="${imgUrl}" alt="Uploaded Image" class="preview">`;
    };

    fileReader.readAsDataURL(myFile);
  } else {
    showError("Invalid file type. Please upload a JPG or PNG image.");
  }
}

// Show error message
function showError(message) {
  alert(message); // Replace with a UI-based message in production
  dragBody.classList.remove("active");
  dragText.textContent = "Drag & Drop";
}
