const sendRelp = document.querySelector('.sendRlp');
const relpElem = document.querySelector('.rlpCon');

relpElem.addEventListener('keypress', uploadRelp);

function uploadRelp(e) {
    if(e.keyCode === 13) {
    
        // input에 value가 존재 할때만 돌아가게

        let comment = document.querySelector('.feedBox');

        let makeDiv = document.createElement('div');
        let makeUseId = document.createElement('a');
        let makeRelp = document.createElement('span');
        let makeDelBtn = document.createElement('button');

        //class 부여
        makeDiv.className = "comtDiv";
        makeUseId.className = "comtUser";
        makeRelp.className = "comtRelp";
        makeDelBtn.className = "comtDelete";

        makeUseId.innerHTML = "send-9898"
        makeRelp.innerHTML = relpElem.value;
        makeDelBtn.innerHTML = "삭제";

        makeDiv.appendChild(makeUseId);
        makeDiv.appendChild(makeRelp);
        makeDiv.appendChild(makeDelBtn);
        comment.appendChild(makeDiv);

        relpElem.value = '';

        makeDelBtn.addEventListener("click", function(e) {
            const btn = event.target;

            const deleteAll = btn.parentNode;

            comment.removeChild(deleteAll);
        })
    }
}