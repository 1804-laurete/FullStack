let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d')
    
ctx.beginPath()
ctx.lineWidth = 2;
ctx.strokeStyle = 'blue';
ctx.fillStyle = 'blue';
ctx.fillRect (0,0,50,50);

ctx.lineWidth = 2;
ctx.strokeStyle = 'red';
ctx.fillStyle = 'red';
ctx.fillRect (250,0,50,50);

// ctx.beginPath()
ctx.lineWidth = 2;
ctx.strokeStyle = 'yellow';
ctx.fillStyle = 'yellow';
ctx.fillRect(0,230,70,70);

// ctx.beginPath()
ctx.lineWidth = 2;
ctx.strokeStyle = 'beige';
ctx.fillStyle = 'beige';
ctx.fillRect(33,227,40,40);


// ctx.beginPath()
ctx.lineWidth = 2;
ctx.strokeStyle = 'black';
ctx.fillStyle = 'black';
ctx.fillRect (230,230,70,70);
ctx.closePath()

// ctx.beginPath()
ctx.lineWidth = 2;
ctx.strokeStyle = 'beige';
ctx.fillStyle = 'beige';
ctx.fillRect (230,227,38,39);
ctx.closePath()

ctx.lineWidth = 2;
ctx.strokeStyle = 'aqua';
ctx.fillStyle = 'aqua';
ctx.fillRect (0,110,40,80);
ctx.closePath()

ctx.lineWidth = 2;
ctx.strokeStyle = 'aqua';
ctx.fillStyle = 'aqua';
ctx.fillRect (260,130,40,40);
ctx.closePath()

ctx.lineWidth = 2;
ctx.strokeStyle = 'red';
ctx.fillStyle = 'red';
ctx.fillRect (105,150,45,45);
ctx.closePath()

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'beige';
ctx.strokeStyle = 'green';
ctx.arc(150,150,100,1.75*Math.PI,2.0*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'beige';
ctx.strokeStyle = 'green';
ctx.arc(150,150,100,1.0*Math.PI,1.25*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'beige';
ctx.strokeStyle = 'green';
ctx.arc(150,150,70,1.0*Math.PI,2.0*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();




// bolinhas 
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'aqua';
ctx.strokeStyle = 'blue';
ctx.arc(150,110,17,0.5*Math.PI,2.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.arc(80,225,15,0.5*Math.PI,2.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.arc(218,225,15,0.5*Math.PI,2.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();



// linhas
ctx.beginPath()
ctx.lineWidth = 2;
ctx.fillStyle = 'blue'
ctx.strokeStyle = 'blue';
ctx.moveTo(0,0)
ctx.lineTo(150,150)
ctx.stroke()
ctx.closePath()


ctx.beginPath()
ctx.lineWidth = 2;
ctx.fillStyle = 'red'
ctx.strokeStyle = 'red'
ctx.moveTo(300,0)
ctx.lineTo(150,150)
ctx.stroke()
ctx.closePath()

ctx.beginPath()
ctx.lineWidth = 2;
ctx.fillStyle = 'green'
ctx.strokeStyle = 'green'
ctx.moveTo(0,150)
ctx.lineTo(300,150)
ctx.stroke()
ctx.closePath()

ctx.beginPath()
ctx.lineWidth = 2;
ctx.fillStyle = 'blue'
ctx.strokeStyle = 'blue';
ctx.moveTo(150,150)
ctx.lineTo(150,300)
ctx.stroke()
ctx.closePath()


// arcos



ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'beige';
ctx.strokeStyle = 'green';
ctx.arc(151,300,60,1.5*Math.PI,2.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'beige';
ctx.strokeStyle = 'green';
ctx.arc(150,300,70,1.0*Math.PI,1.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'aqua';
ctx.strokeStyle = 'green';
ctx.arc(150,300,40,0.5*Math.PI,2.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();


