const texts = document.querySelectorAll('.has-tooltip');
const toolTip = document.querySelector('.tooltip');
const tooltipActive = document.querySelector('.tooltip_active');

for (let txt of texts) {
    txt.addEventListener('click', showAdvice);
}

toolTip.addEventListener('click', () => toolTip.classList.remove('tooltip_active'));

function showAdvice(e) {
    e.preventDefault();

    if (tooltipActive) {
        tooltipActive.classList.remove('tooltip_active');
    }

    toolTip.classList.add('tooltip_active');
    toolTip.innerText = e.target.title;
    toolTip.style.top = e.target.getBoundingClientRect().top + 20 + 'px';
    toolTip.style.left = e.target.getBoundingClientRect().left + 'px';
}