let canvas  = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

// sol 
ctx.beginPath()
ctx.lineWidth = 2;
ctx.strokeStyle = 'yellow'
ctx.fillStyle = 'yellow'
ctx.arc(220,90,40,0.5*Math.PI,2.5*Math.PI)
ctx.fill()
ctx.stroke()
ctx.closePath()


// chão 
ctx.beginPath()
ctx.lineWidth = 2;
ctx.strokeStyle = 'grey'
ctx.fillStyle = 'grey'
ctx.fillRect(0,210,300,100)
ctx.closePath()

// casa 
ctx.beginPath()
ctx.lineWidth = 2;
ctx.strokeStyle = '#8b4513'
ctx.fillStyle = '#8b4513'
ctx.fillRect(100,130,70,80)
ctx.closePath()

ctx.beginPath()
ctx.lineWidth = 2;
ctx.strokeStyle = '#00BFFF'
ctx.fillStyle = '#00BFFF'
ctx.fillRect(105,150,20,20)
ctx.closePath()

ctx.beginPath()
ctx.lineWidth = 2;
ctx.strokeStyle = '#00BFFF'
ctx.fillStyle = '#00BFFF'
ctx.fillRect(145,150,20,20)
ctx.closePath()

ctx.beginPath()
ctx.lineWidth = 2;
ctx.strokeStyle = '#A0522D'
ctx.fillStyle = '#A0522D'
ctx.fillRect(127,180,15,30)
ctx.closePath()


// ARVORE

ctx.beginPath()
ctx.lineWidth = 2;
ctx.strokeStyle = '#A0522D'
ctx.fillStyle = '#A0522D'
ctx.fillRect(40,180,15,30)
ctx.closePath()

ctx.beginPath()
ctx.lineWidth = 2;
ctx.strokeStyle = 'darkgreen'
ctx.fillStyle = 'darkgreen'
ctx.arc(47,165,17,0.5*Math.PI,2.5*Math.PI)
ctx.fill()
ctx.stroke()
ctx.closePath()


ctx.beginPath()
ctx.lineWidth = 2;
ctx.strokeStyle = '#A0522D'
ctx.fillStyle = '#A0522D'
ctx.fillRect(250,220,15,30)
ctx.closePath()

ctx.beginPath()
ctx.lineWidth = 2;
ctx.strokeStyle = 'darkgreen'
ctx.fillStyle = 'darkgreen'
ctx.arc(257,205,17,0.5*Math.PI,2.5*Math.PI)
ctx.fill()
ctx.stroke()
ctx.closePath()


// agua 

ctx.beginPath()
ctx.lineWidth = 2;
ctx.strokeStyle = 'blue'
ctx.fillStyle = 'blue'
ctx.fillRect(0,260,110,100)
ctx.closePath()

ctx.beginPath()
ctx.lineWidth = 2;
ctx.strokeStyle = 'blue'
ctx.fillStyle = 'blue'
ctx.fillRect(0,210,30,250)
ctx.closePath()

ctx.beginPath()
ctx.lineWidth = 2;
ctx.strokeStyle = 'blue'
ctx.fillStyle = 'blue'
ctx.arc(100,290,30,0.5*Math.PI,2.5*Math.PI)
ctx.fill()
ctx.stroke()
ctx.closePath()

ctx.beginPath()
ctx.lineWidth = 2;
ctx.strokeStyle = 'blue'
ctx.fillStyle = 'blue'
ctx.arc(0,207,30,0.5*Math.PI,2.5*Math.PI)
ctx.fill()
ctx.stroke()
ctx.closePath()


ctx.beginPath()
ctx.lineWidth = 2;
ctx.strokeStyle = '#CD5C5C'
ctx.fillStyle = '#CD5C5C'
ctx.moveTo(100,100)
ctx.lineTo()
ctx.closePath()
