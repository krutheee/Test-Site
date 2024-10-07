const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/383-100.png") {
    myImage.setAttribute("src", "images/horse.webp");
  } else {
    myImage.setAttribute("src", "images/383-100.png");
  }
};
