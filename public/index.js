const socket = io()

input = document.getElementById("input");
button = document.getElementById("button")
paragraph = document.getElementById("paragraph")

socket.on("message",(text)=>{
    console.log(text)
    paragraph.innerHTML+=text+"<br />"
})

button.addEventListener("click",(e)=>{
    e.preventDefault();
    socket.emit("message",input.value)
    input.value=""
})