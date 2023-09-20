// 유효성 검사 객체
const checkObj = {
    "inputId" : false, // 아이디
    "inputPw" : false, // 비번
    "inputPwConfirm" : false, // 비번확인
    "inputName" : false, // 이름
    "gender" : false, // 성별
    "inputTel" :false // 전화번호
}

// 아이디
document.getElementById("inputId").addEventListener("change", function(){

    const regExp = /^[a-z]+[\w\d\-\_]{5,13}/g;

    // if(this.value.length == 0){
    //     return;
    // }

    if( regExp.test(this.value) ){
        this.style.backgroundColor = "springgreen";

        checkObj.inputId = true; // 유효성검사객체 중 아이디 값 true로 바꿔주기
    }else{
        this.style.backgroundColor = "red";
        this.style.color = "white";

        checkObj.inputId = false; // 유효성검사객체 중 아이디 값 false로 바꿔주기
    }
});

// 비밀번호

const inputPw = document.getElementById("inputPw");
const inputPwConfirm = document.getElementById("inputPwConfirm");

inputPwConfirm.addEventListener("keyup", function(){

    if(inputPw.value.length == 0){

        this.value = "";
        alert("비밀번호를 입력해주세요");
        inputPw.focus();

        checkObj.inputPw = false;
    }
});

const pwMessage = document.getElementById("pwMessage");    

inputPw.addEventListener("keyup", function(){

    if( (inputPw.value == inputPwConfirm.value) && inputPw.value.length != 0){
        pwMessage.innerText = "비밀번호 일치"

        pwMessage.classList.add("confirm");
        pwMessage.classList.remove("error"); 
        
        checkObj.inputPw = true;
        checkObj.inputPwConfirm = true;
    }else{
        pwMessage.innerText = "비밀번호 불일치"

        pwMessage.classList.remove("confirm");
        pwMessage.classList.add("error"); 

        checkObj.inputPwConfirm = false;
    }
});

inputPwConfirm.addEventListener("keyup", function(){
    if( (inputPw.value == pwConfirm.value) && inputPw.value.length != 0){
        pwMessage.innerText = "비밀번호 일치"

        pwMessage.classList.add("confirm");
        pwMessage.classList.remove("error"); 
        
        checkObj.inputPw = true;
        checkObj.inputPwConfirm = true;
    }else{
        pwMessage.innerText = "비밀번호 불일치"

        pwMessage.classList.remove("confirm");
        pwMessage.classList.add("error"); 

        checkObj.inputPwConfirm = false;
    }
});


// 이름
document.getElementById("inputName").addEventListener("change", function(){

    const regExp = /^[가-힣]{2,5}$/;
    const span = document.getElementById("nameMessage");

    if(this.value.length == 0){
        span.innerText = "";
        span.classList.remove("confirm");
        span.classList.remove("error"); 
    }

    if( regExp.test(this.value) ){
        span.innerText = "정상입력";

        span.classList.add("confirm");
        span.classList.remove("error"); 

        checkObj.inputName = true;
    }else{
        span.innerText = "한글만 입력하세요";
        
        span.classList.remove("confirm");
        span.classList.add("error"); 

        checkObj.inputName = false;
    }
});

function validate(){
    
    // 성별
    const gender = document.getElementsByName("gender");

    if( !gender[0].checked && !gender[1].checked ){
        alert("성별을 선택해주세요");

        checkObj.gender = false;
        return false;
    }else{
        checkObj.gender = true;
    }
    
    
    // 전화번호
    const inputTel = document.getElementById("inputTel");
    const regExp = /^[0][0-9]{1,2}-[0-9]{3,4}-[0-9]{4}/;

    if( !regExp.test(inputTel.value) ){
        alert("전화번호의 형식이 올바르지 않습니다");
        checkObj.inputTel = false;
        return false;
    }else{
        checkObj.inputTel = true;
    }
    

    // checkObj가 전부 true일 떄 == 모든 유효성 검사를 통과했을 때 -> 회원가입
    for(let key in checkObj){
        if( !checkObj[key] ){
            return false;
        }
    }

    alert("회원가입 완료");
    return true;

}