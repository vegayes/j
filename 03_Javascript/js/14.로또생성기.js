
document.getElementById("btn").addEventListener("click", () => {

    // container 자식 div 6개 선택
    const numbers = document.querySelectorAll("#container > div");

    // 로또 번호를 저장할 배열 선언
    const lotto = [];

    while(lotto.length < 6){
        // 1-45 난수 생성
        const random = Math.floor(Math.random() * 45) + 1;
        
        // 생성된 난수가 배열에 있는지 검사
        if(lotto.indexOf(random) == -1){ // 중복x
            lotto.push(numbers);
        }

        // lotto에 저장된 난수 오름차순 정렬
        lotto.sort(function(a, b) {return a - b;} );

        // numbers의 인덱스별로 lotto인덱스에 저장된 값 출력
        for(let i = 0; i < lotto.length; i++){
            numbers[i].innerHTML = lotto[i];
        }
    }
})
