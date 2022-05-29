

let basicSkillsTitle = document.getElementById('basic-skills-title');
let generalSkills = document.getElementById('general-skills');
let databaseEngines = document.getElementById('database-engines');

databaseEngines.style.display = 'none';
generalSkills.style.display = 'none'; 


basicSkillsTitle.addEventListener('click', function() {
    if (generalSkills.style.display === 'none'){
        generalSkills.style.display = 'flex';
    } else {
        generalSkills.style.display = 'none'; 
    }
});
    





