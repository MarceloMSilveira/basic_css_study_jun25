const theImg = document.querySelector('img');
const myButton = document.querySelector('button');
const myH1 = document.querySelector('h1');

function handleClick(evt) {
  const SrcImg1 = './mozila_logo.webp';
  const SrcImg2 = './image2.png';
  const srcImg = evt.target.getAttribute('src');
  const isImg2 = srcImg == './image2.png';
  
  if (isImg2) {
    evt.target.setAttribute("src",SrcImg1);
  } else {
    evt.target.setAttribute("src",SrcImg2);
  }
  
}

function setUserName() {
  const theName = prompt("Your name: ");
  localStorage.setItem("name202", theName);
  myH1.textContent = `Mozila is cool, ${theName}!`;
}

theImg.addEventListener('click', handleClick);

if (!localStorage.getItem('name202')) {
  setUserName();
} else {
  const storedName = localStorage.getItem('name202');
  myH1.textContent = `Mozila is cool, ${storedName}!`;
}

myButton.addEventListener('click',()=>setUserName());