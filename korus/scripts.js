const timeline = document.querySelector('.timeline')
const timelineVariant = Array.from(document.getElementsByClassName('timelines-variant'));
const steps = Array.from(document.querySelectorAll('.steps'));
const progress = Array.from(document.querySelectorAll('.step'));

//timeline state change

function timelineChange() {
  classRemove();
  timeline.classList.add(this.dataset.timeline);
}

function classRemove() {
  for(let i = 0; i < timelineVariant.length; i++) {
    let state = timelineVariant[i].dataset.timeline;

    timeline.classList.contains(state) ? timeline.classList.remove(state) : null;
  }
}

//timeline step change
function stepChange() {
  progress[this.dataset.step - 1].classList.contains('progress') ? 
    (
      progress[this.dataset.step - 1].classList.add('passed'),
      progress[this.dataset.step - 1].classList.remove('progress')
    ) :
    (
      progress[this.dataset.step - 1].classList.add('progress'),
      progress[this.dataset.step - 1].classList.remove('passed')
    );
}

timelineVariant.forEach(item => {
 item.addEventListener('click', timelineChange);
})

steps.forEach(item => {
  item.addEventListener('click', stepChange)
})

