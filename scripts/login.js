class SecretLogin{
    static x = 0;
}

function Inc(){
    SecretLogin.x++;
    if(SecretLogin.x>=7){
        window.location.replace("/admin.html");
    }
}