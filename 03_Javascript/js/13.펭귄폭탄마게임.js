let xindex = 0;
let yindex = 0;

document.addEventListener("keydown", function(e){
    
    console.log("누르는중" + e.key);

    const peng = document.getElementById("peng");
    const boom = document.createElement("img");

    if(e.key == "ArrowRight"){
        xindex += 10;
        peng.style.transform = `translate3d( ${xindex}px, ${yindex}px, 0 )`;
    }else if( e.key == "ArrowLeft" ){
        xindex -= 10;
        peng.style.transform = `translate3d( ${xindex}px, ${yindex}px, 0 )`;
    }else if( e.key == "ArrowDown" ){
        yindex += 10;
        peng.style.transform = `translate3d( ${xindex}px, ${yindex}px, 0 )`;
    }else if( e.key == "ArrowUp" ){
        yindex -= 10;
        peng.style.transform = `translate3d( ${xindex}px, ${yindex}px, 0 )`;
    }else if( e.key == 'x' ){

        const box = document.getElementById("box");
        boom.setAttribute("src", "펭귄폭탄마_img/boom.png");
        boom.style.transform = `translate3d( ${xindex}px, ${yindex}px, 0 )`;
        boom.style.position = "absolute";

        box.append(boom);
    }

    setTimeout(function(){
        boom.setAttribute("src", "펭귄폭탄마_img/boom2.png")
    }, 2000);

})