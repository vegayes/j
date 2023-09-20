
// 객체 생성 방법 1
document.getElementById("btn1").addEventListener("click", function(){

    const div1 = document.getElementById("div1");

    // {} 객체 리터럴 표기법으로 객체 생성

    // ** 중요 **
    // 자바스크립트의 객체의 key는 무조건 String(묵시적)
    // "Key" / 'key' / key 모두 String으로 인식

    const brand = "할리스";

    const product = {
        "pName" : "텀블러",
        'brand' : '스타벅스',
        color : ["white", "black", "silver"],
        price : 35000,

        mix : function(){
            console.log("음료를 섞기시작합니다.");
        },

        infotmation : function(){
            // 같은 객체 내부의 다른 속성을 호출하고 싶은 경우
            // 현재 객체를 뜻하는 this를 앞에 붙여야한다.
            console.log(this.color);
            console.log(this.brand);

            // this 미작성 시 객체 외부의 변수를 호출하는 것이다.
            console.log(brand);
        }
    };

    div1.innerHTML += "product.pName : " + product.pName + "<br>";
    div1.innerHTML += "product.brand : " + product.brand + "<br>";
    div1.innerHTML += "product.color : " + product.color + "<br>";
    div1.innerHTML += "product.price : " + product.price + "<br>";

        
    // 객체 메서드 호출
    product.mix();
    product.infotmation();
});



// 객체 생성 방법 2 (생성자 함수)

// 1. 생성자 함수 정의(생성자 함수명은 대문자로 시작!)
function Student(name, grade, ban){

    // 속성
    // this == 생성되는 객체
    this.name = name;
    this.grade = grade;
    this.ban = ban;

    // 기능(메서드)
    this.intro = function(){
        console.log( grade + "학년 " + ban + "반 " + name + "입니다.")
    }
}

// 2. 생성자 함수 호출(new 연산자)
document.getElementById("btn2").addEventListener("click", function(){

    const std1 = new Student("홍길동", 3, 2);

    console.log(std1);

    // 생성자 함수 사용 이유 : 같은 형태의 객체가 다수 필요한 경우 사용
    // 코드길이 감소, 재사용성 증가
    std1.intro();
});