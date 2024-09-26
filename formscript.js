const formSteps = document.querySelectorAll('.form-step');
const nextBtns = document.querySelectorAll('.next-btn');
const prevBtns = document.querySelectorAll('.prev-btn');
const progressBullets = document.querySelectorAll('.bullet');

let currentStep = 0;

nextBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    currentStep++;
    updateFormSteps();
    updateProgressBar();
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    currentStep--;
    updateFormSteps();
    updateProgressBar();
  });
});

function updateFormSteps() {
  formSteps.forEach((step, index) => {
    if (index === currentStep) {
      step.classList.add('active');
    } else {
      step.classList.remove('active');
    }
  });
}

function updateProgressBar() {
  progressBullets.forEach((bullet, index) => {
    if (index <= currentStep) {
      bullet.classList.add('active');
    } else {
      bullet.classList.remove('active');
    }
  });
}

// Initial load
updateFormSteps();
updateProgressBar();
