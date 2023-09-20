document.getElementById("add").addEventListener("click", function(){

    // div 요소 생성
    const div = document.createElement("div");

    // div에 row클래스 추가
    div.classList.add("row");
    // <div class="row"></div>이 생성됨

    // ------------------------------------------------

    // input 요소 생성 및 in클래스 추가
    const input = document.createElement("input");
    input.classList.add("in");
    //<input class="in">이 생성됨

    // ------------------------------------------------
    
    // span요소 생성
    const span = document.createElement("span");
    // remove 클래스 추가
    span.classList.add("remove");
    // span 동그라미 안에 X 표시 추가
    span.innerText = "X";
    // <span clas="remove"></span>

    // ------------------------------------------------

    div.append(input);
    // <div class="row">
    //      <input class="in">
    // </div> 이 생성됨

    div.append(span);
    // <div class="row">
    //      <input class="in">
    //      <span class="remove"></span>
    // </div> 이 생성됨

    document.getElementById("container").append(div);

    span.addEventListener("click", function(){
        span.parentElement.remove();
    })

})