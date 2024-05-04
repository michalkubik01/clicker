import { array } from './sample_code';

let score = 0;

let developerCost = 10;
let developers = 0;

let previousText: string;
let currentText: string;
let nextText: string;

let developer_lps = 1;

let i = 0;

const sampleCode = getRandomFromArray(array).split('\n');


function getRandomFromArray(list: Array<string>) {
  return list[Math.floor(Math.random() * list.length)];
}

function updateDisplay(element: string, label: string, variable: any) {
    const display = document.getElementById(element)!;
    display.textContent = `${label}: ${variable}`;
}

function updateText() {
  const previousTextElement = document.getElementById('previous-line')!;
  const currentTextElement = document.getElementById('current-line')!;
  const nextTextElement = document.getElementById('next-line')!;

  previousText = i > 0 ? sampleCode[i - 1] : ' ';
  currentText = sampleCode[i];
  nextText = i + 1 < sampleCode.length ? sampleCode[i + 1]: ' ';

  i++;

  previousTextElement.textContent = previousText === '' ? '↵' : previousText;
  currentTextElement.textContent = currentText === '' ? '↵' : currentText;
  nextTextElement.textContent = nextText === '' ? '↵' : nextText;
}

document.addEventListener('DOMContentLoaded', () => {
  const hireDeveloperButton = document.getElementById('hire-developer')!;

  updateText();

  const typingInput = document.getElementById(
    'typing-input'
  ) as HTMLTextAreaElement;
  typingInput.addEventListener('input', () => {
    if ((typingInput.value.trim() === currentText.trim()) || (currentText === '' && typingInput.value === '\n')) {
      score++;
      typingInput.value = '';
      updateText();
    }
  });

  hireDeveloperButton.addEventListener('click', () => {
    if (score >= developerCost) {
      score -= developerCost;
      developers++;
      developerCost = Math.floor(developerCost * 1.15);
      hireDeveloperButton.textContent = `Hire a Developer (Cost: ${developerCost})`;
      updateDisplay('developer-count','Developers', developers);
      updateDisplay('lps', 'LPS', developer_lps*developers);
    }
  });

  setInterval(() => {
    score += 0.02 * developer_lps * developers;
    updateDisplay('lines-of-code', 'Lines', score);
  }, 20); // Update score every second
});
