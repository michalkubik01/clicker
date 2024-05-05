import { getRandomFromArray } from "./helpers";
import { array } from "./sample_code";
const sampleCode = getRandomFromArray(array).split("\n");

let score = 0;

let previousText: string;
let currentText: string;
let nextText: string;

const LPS = {
  developer: 1,
};

const cost = {
  developer: 0,
};

const workers = {
  developer: 0,
};

let i = 0;

function updateDisplay(element: string, label: string, variable: string | number) {
  const display = document.getElementById(element)!;
  display.textContent = `${label}: ${variable}`;
}

function switchToNextLine() {
  const previousTextElement = document.getElementById("previous-line")!;
  const currentTextElement = document.getElementById("current-line")!;
  const nextTextElement = document.getElementById("next-line")!;

  previousText = i > 0 ? sampleCode[i - 1] : " ";
  currentText = sampleCode[i];
  nextText = i + 1 < sampleCode.length ? sampleCode[i + 1] : " ";

  i++;

  previousTextElement.textContent = previousText === "" ? "↵" : previousText;
  currentTextElement.textContent = currentText === "" ? "↵" : currentText;
  nextTextElement.textContent = nextText === "" ? "↵" : nextText;
}

document.addEventListener("DOMContentLoaded", () => {
  const hireDeveloperButton = document.getElementById("hire-developer")!;

  switchToNextLine();

  const typingInput = document.getElementById("typing-input") as HTMLTextAreaElement;

  typingInput.addEventListener("input", () => {
    const inputValue = typingInput.value;

    // Check for exact match and switch line
    if (inputValue.trim() === currentText.trim() || (currentText === "" && inputValue === "\n")) {
      score++;
      typingInput.value = "";
      switchToNextLine();
    }
  });

  hireDeveloperButton.addEventListener("click", () => {
    if (score >= cost.developer) {
      score -= cost.developer;
      workers.developer++;
      cost.developer = Math.floor(cost.developer * 1.15);
      hireDeveloperButton.textContent = `Hire a Developer (Cost: ${cost.developer})`;
      updateDisplay("developer-count", "Developers", workers.developer);
      updateDisplay("lps", "LPS", LPS.developer * workers.developer);
    }
  });

  setInterval(() => {
    score += 0.02 * LPS.developer * workers.developer;
    updateDisplay("lines-of-code", "Lines", Math.round(score));
  }, 20); // Update score every second
});
