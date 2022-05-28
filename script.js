let projectDescription = document.getElementById('project-description');
let projectTitle = document.getElementById('project-title');

projectDescription.style.display = 'none';

projectTitle.addEventListener('click', function() {
    if (projectDescription.style.display === 'none'){
        projectDescription.style.display = 'block';
    } else {
        projectDescription.style.display = 'none';
    }
});
    





