const toggleSkillsButton = document.getElementById('toggleSkillsButton') as HTMLButtonElement;
const skillsList = document.getElementById('skillsList') as HTMLElement;

toggleSkillsButton.addEventListener('click', () => {
  if (skillsList.style.display === 'none') {
    skillsList.style.display = 'block';
    toggleSkillsButton.innerText = 'Hide Skills';
  } else {
    skillsList.style.display = 'none';
    toggleSkillsButton.innerText = 'Show Skills';
  }
});


