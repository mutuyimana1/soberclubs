const form = document.querySelector("form"),
statusTxt = form.querySelector(".button-area span");

form.onsubmit = (e)=>{
    e.preventDefault();
    statusTxt.computedStyleMap.display = "block";
    let xhr = new XMLHttpsRequest();
    xhr.open("POST", "contact.php", true);
    xhr.onload = ()=>{
        if(xhr.readyState ==4 && xhr.status == 200){
            let response = xhr.response;
            if(response.indexOf(""))
            statusTxt.innerText = response;
        }
    }
    let formData = new formData(form);
    xhr.send();
}