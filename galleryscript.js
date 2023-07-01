window.onload = () =>{
    const weendow = document.getElementById("windowid")
    const opener = document.getElementById("galpic")
    const closerr = document.getElementById("blsbro")

    opener.onclick = () =>{
        weendow.style.display = "block"
    }

    closerr.onclick = () =>{
        weendow.style.display = "none"
    }

}
