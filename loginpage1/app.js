document.querySelector("#btn").addEventListener("click", () => {
    const id = "admin";
    const password = "1234";
 
    if(id == document.querySelector("#id_area").value) {
        if(password == document.querySelector("#pw_area").value) {
            alert("환영합니다!");
            //document.write("환영합니다!");
        }
        else {
            alert("비밀번호가 맞지 않습니다.");
            //document.write("비밀번호가 맞지 않습니다.");
        }
    }
    else {
        alert("아이디 혹은 비밀번호가 맞지 않습니다.");
        //document.wrtie("아이디 혹은 비밀번호가 맞지 않습니다.");
    }
});