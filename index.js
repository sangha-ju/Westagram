const changeLog = document.querySelector('.logPut');
const changeBtn = document.querySelector('.logBtn');

changeLog.addEventListener('keydown', function(e) {
    if(changeLog.value.length > 0) {
        changeBtn.style.backgroundColor = "blue";    
    } else {
        changeBtn.style.backgroundColor = "rgba(0, 149, 246, 0.3)";
    }
});