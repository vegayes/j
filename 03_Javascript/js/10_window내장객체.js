document.getElementById("btn1").addEventListener("click", function(){

    setTimeout( function(){
        alert("3초 후 출력!")
    }, 3000);
});

let interval; // setInterval을 저장하기 위한 전역변수

// 현재 시간 문자열로 반환 함수
function currentTime(){
    const now = new Date();
    
    let hour = now.getHours(); // 시
    let min = now.getMinutes(); // 분
    let sec = now.getSeconds(); // 초

    if(hour < 10) hour = "0" + hour;
    if(min < 10) min = "0" + min;
    if(sec < 10) sec = "0" + sec;

    return hour + " : " + min + " : " + sec;
}

function clockFn(){
    const clock = document.getElementById("clock");
    clock.innerText = currentTime();

    interval = setInterval(function(){
        clock.innerText = currentTime();
    }, 1000);
}

clockFn(); // 함수호출

// clearInterval
document.getElementById("stop").addEventListener("click", function(){
    clearInterval(interval);
});