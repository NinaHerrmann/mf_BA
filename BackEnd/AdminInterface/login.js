function inputButtonPressed(){
    const name = document.getElementById("username").value;
    const password = document.getElementById("password").value;


    if (name==="mf_app" && password === "123abc"){
        console.log("sth");
        window.location.href="AddEintrag.html";
    }
    else console.log(name);
    
}

// document.getElementById("btn").addEventListener("click", console.log("mooin"));

var mybtn = document.getElementById("myBtn");


mybtn.addEventListener("click", function(){inputButtonPressed()});

