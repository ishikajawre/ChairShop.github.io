// Add event listener to a button
document.addEventListener("DOMContentLoaded", function () {
  const myButton = document.getElementById("myButton");

  if (myButton) {
    myButton.addEventListener("click", function () {
      alert("Button Clicked!");
    });
  }
});
function isCorrectJS(code) {
  try {
    eval(code);
    return true;
  } catch (error) {
    return false;
  }
}
