let resumePageTurn = document.getElementById('page-turn');
let resumeImg = document.getElementById('resume');
let turned = false;


resumePageTurn.addEventListener('click', changePage);

function changePage () {
  console.log('change Page worked');
  if (turned === false) {
    resumeImg.src = 'static/landPage/0002.jpg';
    turned = true;
  } else {
    resumeImg.src = 'static/landPage/0001.jpg';
    turned = false;
  }
}
