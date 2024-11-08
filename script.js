const canvas= document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = 650;

const ctx = canvas.getContext('2d');

const rocket = new Image();
rocket.src ="images/rocket.png";

let launch ={
    x:600,
    y:302
}

function draw(){
    ctx.clearRect(0,0, canvas.width, canvas.height );
    ctx.fillStyle= 'green';
    ctx.fillRect(0 ,600 ,canvas.width, 60);
    ctx.drawImage(rocket, 600, launch.y);
}
document.body.onload= function(){
    draw();
    }

document.getElementById("btnStart").onclick= function(){
    
    requestAnimationFrame(loop);
    launch.y =302;
    
}
document.getElementById("btnRestart").onclick= function(){
    launch.y =302;
    draw();
    
}
 function loop(){
    draw();
    let launchTime = 10;
    

    
    
    const countdown = setInterval(() => {
        if (launchTime <= 0) {
            clearInterval(countdown);
            ctx.clearRect(0,0, canvas.width, canvas.height);
            draw();
            ctx.font ="50px serif";
            ctx.fillStyle = 'black';
            ctx.fillText("Take off!!!", 200, 60);
            requestAnimationFrame(update);
          
        } else {
            ctx.clearRect(0,0, canvas.width, canvas.height);
            draw();
            ctx.font ="50px serif";
            ctx.fillStyle = 'black';
            let s= "Take off in: " + launchTime;
            ctx.fillText(s, 200, 60);
          launchTime--;
        }
      }, 1000);
}

function update(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    if (launch.y >= -290){
    launch.y -= 10;
    draw();
    requestAnimationFrame(update);
}else{
    draw();
    cancelAnimationFrame();
    
}
}