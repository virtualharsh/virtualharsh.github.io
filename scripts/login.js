class swapbg{
    static x = 0;
}

  
function swap() {
    if(swapbg.x==0){
        document.body.style.background = 'white';
        document.getElementById("nav").style.background = "white";
        document.body.style.color = 'black';
        document.getElementById('nav').style.color = 'black';
        document.getElementById("btnclr").style.filter = "invert(100%)";
        swapbg.x=1;

    }else{
        document.body.style.background = 'black';
        document.getElementById("nav").style.background = "black";
        document.body.style.color = 'white';
        document.getElementById('nav').style.color = 'white';
        document.getElementById("btnclr").style.filter = "invert(0%)";
        swapbg.x=0;
    }
} 
