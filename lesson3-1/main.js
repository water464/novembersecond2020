const buttonGreeting = document.getElementById('button-greeting');
const buttonCheerful = document.getElementById('button-cheerful');
const buttonLate = document.getElementById('button-late');

const input = document.getElementById('name');
const box = document.getElementById('box');

const greet = () => {
  let greeting;
  const hour = new Date().getHours();

  if (hour >= 6 && hour < 12) {
    greeting = 'おはよう';
  } else if (hour >= 12 && hour < 18) {
    greeting = 'こんにちは';
  } else {
    greeting = 'こんばんは';
  }

  return greeting;
};

buttonGreeting.addEventListener('click', () => {
  const name = input.value;
  const greeting = greet();

  box.textContent = `${greeting}、${name}さん`;
});

buttonCheerful.addEventListener('click', () => {
  const name = input.value;
  const greeting = greet();

  box.textContent = `${greeting}！、${name}さん！！！`;
});

buttonLate.addEventListener('click', () => {
  const name = input.value;

  setTimeout(() => {
    // 1秒経過した後に実行される
    box.textContent = `遅れてごめん、${name}さん`;
  }, 1000);
});