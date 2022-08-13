

let basicSkillsTitle = document.getElementById('basic-skills-title');
let generalSkills = document.getElementById('general-skills');

let dataBaseTitle = document.getElementById('database-title');
let databaseEnginesContent = document.getElementById('database-engines');

let toolsTitle = document.getElementById('tools-title');
let toolsContent = document.getElementById('tools-skills');

let opTitle = document.getElementById('op-title');
let opContent =document.getElementById('op-skills-cont');

opContent.style.display = 'none';
toolsContent.style.display = 'none';
databaseEnginesContent.style.display = 'none';
generalSkills.style.display = 'none'; 


basicSkillsTitle.addEventListener('click', function() {
    if (generalSkills.style.display === 'none'){
        generalSkills.style.display = 'flex';
        databaseEnginesContent.style.display = 'none';
        toolsContent.style.display = 'none';
        opContent.style.display = 'none';
    } else {
        generalSkills.style.display = 'none'; 
    }
});

dataBaseTitle.addEventListener('click', function() {
    if (databaseEnginesContent.style.display === 'none'){
        databaseEnginesContent.style.display = 'flex';

    } else {
        databaseEnginesContent.style.display = 'none';
    }
});

toolsTitle.addEventListener('click', function() {
    if (toolsContent.style.display === 'none'){
        toolsContent.style.display = 'flex';
    } else {
        toolsContent.style.display = 'none';
    }
});
    
opTitle.addEventListener('click', function() {
    if (opContent.style.display === 'none') {
        opContent.style.display = 'flex';
    } else {
        opContent.style.display = 'none';
    }
})





