const greetingButton = document.querySelector('#greetingButton');
const message = document.querySelector('#message');

const greetings = [
  '很高兴见到你，愿你今天灵感满满！',
  '谢谢来访，希望这个小页面能带给你一点好心情。',
  '保持热爱，继续创造属于你的精彩。',
];

let greetingIndex = 0;

greetingButton.addEventListener('click', () => {
  message.textContent = greetings[greetingIndex];
  greetingIndex = (greetingIndex + 1) % greetings.length;
});
