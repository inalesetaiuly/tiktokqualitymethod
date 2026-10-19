'use strict';

const sliderRange = document.getElementById('sliderRange');
const afterImageWrapper = document.getElementById('afterImageWrapper');
const sliderLine = document.getElementById('sliderLine');
const sliderHandle = document.getElementById('sliderHandle');
if (sliderRange && afterImageWrapper && sliderLine && sliderHandle) {
  const updateComparison = () => {
    const value = sliderRange.value;
    afterImageWrapper.style.clipPath = `inset(0 0 0 ${value}%)`;
    sliderLine.style.left = `${value}%`;
    sliderHandle.style.left = `${value}%`;
    sliderRange.setAttribute('aria-valuetext', `${value}% исходного изображения`);
  };
  sliderRange.addEventListener('input', updateComparison);
  updateComparison();
}

const tabs = [...document.querySelectorAll('[role="tab"]')];
function selectTab(selected) {
  tabs.forEach(tab => {
    const active = tab === selected;
    tab.setAttribute('aria-selected', String(active));
    tab.tabIndex = active ? 0 : -1;
    document.getElementById(tab.getAttribute('aria-controls')).hidden = !active;
  });
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectTab(tab));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = tabs[(index + 1) % tabs.length];
    if (event.key === 'ArrowLeft') next = tabs[(index - 1 + tabs.length) % tabs.length];
    if (event.key === 'Home') next = tabs[0];
    if (event.key === 'End') next = tabs[tabs.length - 1];
    if (!next) return;
    event.preventDefault();
    selectTab(next);
    next.focus();
  });
});
