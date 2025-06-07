// да създам фукнция която приема мин и макс и рандом число и се върти докато се познае числото или докато минат опитите
const inputNum = document.getElementById(`user-input`);
const btn = document.getElementById(`guess-btn`);
const title = document.title;
const triesLabel = document.getElementById(`tries`);
const message = document.getElementById(`message`);
let maxNum = 0;
let randomNum = 0;
let counter = 0;
let isCorrect = false;

if (
  title === `Лесно ниво` ||
  title === `Средно ниво` ||
  title === `Трудно ниво`
) {
  btn.addEventListener(`click`, (e) => {
    counter++;
    if (title === `Лесно ниво`) {
      maxNum = 10;
    } else if (title === `Средно ниво`) {
      maxNum = 50;
    } else if (title === `Трудно ниво`) {
      maxNum = 100;
    }

    if (inputNum.value <= 0 || inputNum.value > maxNum) {
      message.textContent = `Моля въведете валидно число число между (1 и ${maxNum})`;
      counter--;
    } else {
      message.textContent = ``;
    }

    if (counter >= 1) {
      triesLabel.style.display = `block`;
      triesLabel.textContent = `Опит: ${counter}`;
    }

    if (Number(randomNum) === Number(inputNum.value)) {
      alert(
        `Поздравления ти успя да познаеш числото! Числото беше: ${randomNum}`
      );
      isCorrect = true;
      window.location.href = "index.html";
    }
    if (isCorrect === false) {
      if (title === `Лесно ниво`) {
        if (counter > 5) {
          alert(`Не успя да познаеш числото. Числото беше: ${randomNum}`);
          window.location.href = "index.html";
        }
      } else if (title === `Средно ниво`) {
        if (counter > 20) {
          alert(`Не успя да познаеш числото. Числото беше: ${randomNum}`);
          window.location.href = "index.html";
        }
      } else if (title === `Трудно ниво`) {
        if (counter > 15) {
          alert(`Не успя да познаеш числото. Числото беше: ${randomNum}`);
          window.location.href = "index.html";
        }
      }
    }
  });
  if (title === `Лесно ниво`) {
    randomNum = corectNum(1, 10);
  } else if (title === `Средно ниво`) {
    randomNum = corectNum(1, 50);
  } else if (title === `Трудно ниво`) {
    randomNum = corectNum(1, 100);
  }
  function corectNum(min, max) {
    let output = Math.floor(Math.random() * (max - min + 1) + min);
    return output;
  }
}
