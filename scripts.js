"use strict";
const toggleSkillsButton = document.getElementById('toggleSkillsButton');
const skillsList = document.getElementById('skillsList');
toggleSkillsButton.addEventListener('click', () => {
    if (skillsList.style.display === 'none') {
        skillsList.style.display = 'block';
        toggleSkillsButton.innerText = 'Hide Skills';
    }
    else {
        skillsList.style.display = 'none';
        toggleSkillsButton.innerText = 'Show Skills';
    }
});
const toggleEducationButton = document.getElementById('toggleEducationButton');
const educationList = document.getElementById('educationList');
toggleEducationButton.addEventListener('click', () => {
    if (educationList.style.display === 'none') {
        educationList.style.display = 'block';
        toggleEducationButton.innerText = 'Hide Education';
    }
    else {
        educationList.style.display = 'none';
        toggleEducationButton.innerText = 'Show Education';
    }
});
