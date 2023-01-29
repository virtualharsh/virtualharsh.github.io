class SecretLogin{
    static x = 0;
}

function Inc(){
    console.log("btn clicked");
    SecretLogin.x++;
    if(SecretLogin.x>=7){
        window.location.replace("/admin.html");
    }
}