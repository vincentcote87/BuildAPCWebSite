let current = 0;
const t = 1000;
const POS = ['step1', 'step2','step3', 'step4', 'step5', 'step6',
             'step7', 'step8', 'step9', 'step10', 'step11', 'step12',
            ];

function fadeTo(step) {
  $('.'+ POS[current]).fadeOut(t);
  removeHighlight();
  current = step;
  setTimeout(function () {
    $('.'+ POS[current]).fadeIn(t);
  }, t);
  highlight();
}

function fadeNext() {
  if (current < 11) {
    $('.'+ POS[current]).fadeOut(t);
    removeHighlight();
    current++;
    setTimeout(function () {
      $('.'+ POS[current]).fadeIn(t);
    }, t);
    highlight();
  }
}

function fadePrev() {
  if (current > 0) {
    $('.'+ POS[current]).fadeOut(t);
    removeHighlight();
    current--;
    setTimeout(function () {
      $('.'+ POS[current]).fadeIn(t);
    }, t);
    highlight();
  }
}

function highlight() {
  let position = current + 2;
  $('.stepsList ul li:nth-child('+ position +')').addClass("currentStep");
}

function removeHighlight() {
  let position = current + 2;
  $('.stepsList ul li:nth-child('+ position +')').removeClass("currentStep");
}

