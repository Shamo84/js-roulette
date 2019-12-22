var RandomNum;
var NumeroUscito;


document.getElementById('gioca').addEventListener('click',
function () {
  RandomNum = Math.floor(Math.random() * 37);
  document.getElementById('random-num').innerHTML = RandomNum;
  document.getElementById('pallina').classList.add('animation');


  if (RandomNum == 0) {
    NumeroUscito = 0;
    document.getElementById('inner-roulette').classList.add('rotate0');
  } else if (RandomNum == 1) {
    NumeroUscito = 32;
    document.getElementById('inner-roulette').classList.add('rotate1');
  } else if (RandomNum == 2) {
    NumeroUscito = 15;
    document.getElementById('inner-roulette').classList.add('rotate2');
  }  else if (RandomNum == 3) {
    NumeroUscito = 19;
    document.getElementById('inner-roulette').classList.add('rotate3');
  } else if (RandomNum == 4) {
    NumeroUscito = 4;
    document.getElementById('inner-roulette').classList.add('rotate4');
  } else if (RandomNum == 5) {
    NumeroUscito = 21;
    document.getElementById('inner-roulette').classList.add('rotate5');
  } else if (RandomNum == 6) {
    NumeroUscito = 2;
    document.getElementById('inner-roulette').classList.add('rotate6');
  } else if (RandomNum == 7) {
    NumeroUscito = 25;
    document.getElementById('inner-roulette').classList.add('rotate7');
  } else if (RandomNum == 8) {
    NumeroUscito = 17;
    document.getElementById('inner-roulette').classList.add('rotate8');
  } else if (RandomNum == 9) {
    NumeroUscito = 34;
    document.getElementById('inner-roulette').classList.add('rotate9');
  } else if (RandomNum == 10) {
    NumeroUscito = 6;
    document.getElementById('inner-roulette').classList.add('rotate10');
  } else if (RandomNum == 11) {
    NumeroUscito = 27;
    document.getElementById('inner-roulette').classList.add('rotate11');
  } else if (RandomNum == 12) {
    NumeroUscito = 13;
    document.getElementById('inner-roulette').classList.add('rotate12');
  } else if (RandomNum == 13) {
    NumeroUscito = 36;
    document.getElementById('inner-roulette').classList.add('rotate13');
  } else if (RandomNum == 14) {
    NumeroUscito = 11;
    document.getElementById('inner-roulette').classList.add('rotate14');
  } else if (RandomNum == 15) {
    NumeroUscito = 30;
    document.getElementById('inner-roulette').classList.add('rotate15');
  } else if (RandomNum == 16) {
    NumeroUscito = 8;
    document.getElementById('inner-roulette').classList.add('rotate16');
  } else if (RandomNum == 17) {
    NumeroUscito = 23;
    document.getElementById('inner-roulette').classList.add('rotate17');
  } else if (RandomNum == 18) {
    NumeroUscito = 10;
    document.getElementById('inner-roulette').classList.add('rotate18');
  } else if (RandomNum == 19) {
    NumeroUscito = 5;
    document.getElementById('inner-roulette').classList.add('rotate19');
  } else if (RandomNum == 20) {
    NumeroUscito = 24;
    document.getElementById('inner-roulette').classList.add('rotate20');
  } else if (RandomNum == 21) {
    NumeroUscito = 16;
    document.getElementById('inner-roulette').classList.add('rotate21');
  } else if (RandomNum == 22) {
    NumeroUscito = 33;
    document.getElementById('inner-roulette').classList.add('rotate22');
  } else if (RandomNum == 23) {
    NumeroUscito = 1;
    document.getElementById('inner-roulette').classList.add('rotate23');
  } else if (RandomNum == 24) {
    NumeroUscito = 20;
    document.getElementById('inner-roulette').classList.add('rotate24');
  } else if (RandomNum == 25) {
    NumeroUscito = 14;
    document.getElementById('inner-roulette').classList.add('rotate25');
  } else if (RandomNum == 26) {
    NumeroUscito = 31;
    document.getElementById('inner-roulette').classList.add('rotate26');
  } else if (RandomNum == 27) {
    NumeroUscito = 9;
    document.getElementById('inner-roulette').classList.add('rotate27');
  } else if (RandomNum == 28) {
    NumeroUscito = 22;
    document.getElementById('inner-roulette').classList.add('rotate28');
  } else if (RandomNum == 29) {
    NumeroUscito = 18;
    document.getElementById('inner-roulette').classList.add('rotate29');
  } else if (RandomNum == 30) {
    NumeroUscito = 29;
    document.getElementById('inner-roulette').classList.add('rotate30');
  } else if (RandomNum == 31) {
    NumeroUscito = 7;
    document.getElementById('inner-roulette').classList.add('rotate31');
  } else if (RandomNum == 32) {
    NumeroUscito = 28;
    document.getElementById('inner-roulette').classList.add('rotate32');
  } else if (RandomNum == 33) {
    NumeroUscito = 12;
    document.getElementById('inner-roulette').classList.add('rotate33');
  } else if (RandomNum == 34) {
    NumeroUscito = 35;
    document.getElementById('inner-roulette').classList.add('rotate34');
  } else if (RandomNum == 35) {
    NumeroUscito = 3;
    document.getElementById('inner-roulette').classList.add('rotate35');
  } else if (RandomNum == 36) {
    NumeroUscito = 26;
    document.getElementById('inner-roulette').classList.add('rotate36');
  }

  document.getElementById('num-uscito').innerHTML = NumeroUscito;
});


document.getElementById('reset').addEventListener('click',
function () {
  document.getElementById('inner-roulette').className = 'transform5050';
  document.getElementById('pallina').classList.remove('animation');

});
