class SecretLogin{
    static x = 0;
}

function Inc(){
    SecretLogin.x++;
    if(SecretLogin.x>=7){
        window.location.replace("/admin.html");
    }
}



function myFunction() {
    if(document.cookie==null){
        alert("This website looks amazing in laptops make sure to visit it once");
        document.cookie = "Set";
    }
 }