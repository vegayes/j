// 한줄 주석
/* 범위 주석 */

// js 파일은 <script> 태그 내부라고 생각하면 됨

function btnClick2(){
    alert("external 버튼이 클릭되었습니다.");
}

// JS 테스트
function changeColor1(){
    document.getElementById("box").style.backgroundColor = "red";
}

/* document : 웹페이지를 뜻함
    getElementById : box라는 엘리먼트를 얻어옴
    backgroundColor를 red로 바꾸겠다 라는 뜻
*/

function changeColor2(){
    document.getElementById("box").style.backgroundColor = "yellow";
}