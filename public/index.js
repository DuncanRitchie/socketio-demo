const socket = io()

socket.on("message",(text)=>{
    console.log(text)
})

input = document.getElementById("input");
button = document.getElementById("button")

button.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log(input.value)
    socket.emit("message",input.value)
    input.value=""
})