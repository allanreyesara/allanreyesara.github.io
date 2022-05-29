

let basicSkillsTitle = document.getElementById('basic-skills-title');
let generalSkills = document.getElementById('general-skills');
let dataBaseTitle = document.getElementById('database-title');
let databaseEnginesContent = document.getElementById('database-engines');

databaseEnginesContent.style.display = 'none';
generalSkills.style.display = 'none'; 


basicSkillsTitle.addEventListener('click', function() {
    if (generalSkills.style.display === 'none'){
        generalSkills.style.display = 'flex';
    } else {
        generalSkills.style.display = 'none'; 
    }
});

dataBaseTitle.addEventListener('click', function (){
    if (databaseEnginesContent.style.display === 'none'){
        databaseEnginesContent.style.display = 'flex';
    } else {
        databaseEnginesContent.style.display = 'none';
    }
});
    





