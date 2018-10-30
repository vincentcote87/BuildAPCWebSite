let currentPosition = 1;
const TOTAL_POS = 12;

const POS = ['step1', 'step2','step3', 'step4', 'step5', 'step6',
             'step7', 'step8', 'step9', 'step10', 'step11', 'step12',
            ];

function getNext() {
  if (currentPosition <= 12)
    return currentPosition;
}

function fade(fout, fin) {
  $(fout).fadeOut(1000);
  setTimeout(function () {
    $(fin).fadeIn(1000);
  }, 1000);
}

function getCurrent() {
  for (let i = 0; i < POS.length; ++i) {
    let style = getComputedStyle(document.getElementById(POS[i]));
    if (style.display == 'block')
      return POS[i];
    else
      return 'NotFound';
  }
}

console.log(getCurrent());

