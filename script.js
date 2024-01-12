window.addEventListener("keyboard" ,(e) => {
    document.getElementById("result").innerHTML=`The key pressed is <span>${e.key}</span>`;
});