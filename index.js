const changeLog = document.querySelector('.logPut');
const changePwd = document.querySelector('.pwdPut');
const changeBtn = document.querySelector('.logBtn');

changePwd.addEventListener('keyup', function(e) {
    if(changeLog.value.length > 0) {
        if(changePwd.value.length > 0){
            changeBtn.style.backgroundColor = "blue"; 
        } else {
        changeBtn.style.backgroundColor = "rgba(0, 149, 246, 0.3)";
        }
    } 
});