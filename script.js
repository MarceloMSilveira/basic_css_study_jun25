const theImg = document.querySelector('img');

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

theImg.addEventListener('click', handleClick);