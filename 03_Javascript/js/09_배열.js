// 배열확인 1
document.getElementById("btn1").addEventListener("click", function(){

    // 배열 선언 방법
    const arr1 = new Array(3); // 3칸짜리 배열 생성
    const arr2 = new Array(); // 0칸짜리(비어있는) 배열 생성
    
    // 다른 자료형 대입
    arr1[0] = "김밥";
    arr1[1] = 123;
    arr1[2] = true;
    console.log( arr1 );

    // 0칸짜리 배열 대입 -> 자동으로 길이 증가
    arr2[0] = "김밥";
    arr2[1] = 123;
    arr2[2] = true;
    console.log( arr2 );

    // 배열 선언 방법
    const arr3 = []; // 비어있는 배열만 선언
    const arr4 = ["사과", "딸기", "바나나"]; // 선언과 동시에 초기화

    // for문으로 배열 요소 반복 접근하기
    // 1. 일반 for문
    // 2. 향상된 for문 (for...of) : 배열용 향상된 for문
    for(let item of arr4){
        console.log(item);
    }
});

document.getElementById("btn2").addEventListener("click", function(){

    // 비어있는 배열
    const arr = [];

    // push() : 배열 마지막요소로 추가
    arr.push("삼겹살");
    arr.push("곱창");
    arr.push("국밥");
    arr.push("소주");
    arr.push("맥주");

    console.log(arr);

    // pop() : 마지막요소 꺼내오기
    console.log( "꺼내온 요소 : " + arr.pop() );
    console.log( arr );

    // 배열.indexOf("값") : 일치하는 값을 가진 요소의 index 반환
    console.log("국밥 인덱스 : " + arr.indexOf("국밥"));    
    console.log("갈비탕 인덱스 : " + arr.indexOf("갈비탕")); // 없는경우 -1반환

    // 배열.sort([정렬기준 함수]) : 배열 내 요소를 오름차순으로 정렬(문자열 기준)
    const arr2 = [5,3,2,10,1];

    console.log( arr.sort() );
    console.log( arr2.sort() ); // 문자열 기준
    // 숫자 기준 정렬
    console.log( arr2.sort( function(a,b) {return a-b} ) ); // 숫자 오름차순 정렬
    console.log( arr2.sort( function(a,b) {return b-a} ) ); // 숫자 내림차순 정렬


    // 문자열로 출력
    console.log( arr.toString() );
    console.log( arr.join(" / ") );
});