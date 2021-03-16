let socket = io.connect("http://localhost:3000");
let message = document.querySelector("#message"),
  title = document.querySelector("#handle"),
  btn = document.querySelector("#send"),
  output = document.querySelector("#output"),
  feedback = document.querySelector("#feedback");


  btn.addEventListener('click',()=>{
      socket.emit('chat',{
          message:message.value,
          title:title.value
      });

      message.value='';
  });
 message.addEventListener('keypress',()=>{
     socket.emit('writing',title.value)
 })
  socket.on('chat2',(data)=>{
 console.log(data);
 output.innerHTML+=`<p><strong>${data.title}</strong></p><p>${data.message}</p>`
 feedback.innerHTML='';
  })

  socket.on('writing',(data)=>{
    console.log(data);
    feedback.innerHTML=`<p><em>${data} yazıyor...</em></p>`
     })