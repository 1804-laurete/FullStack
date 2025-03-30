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
ctx.fillRect(105,150,25,25)
ctx.closePath()

ctx.beginPath()
ctx.lineWidth = 2;
ctx.strokeStyle = '#00BFFF'
ctx.fillStyle = '#00BFFF'
ctx.fillRect(140,150,25,25)
ctx.closePath()

ctx.beginPath()
ctx.lineWidth = 2;
ctx.strokeStyle = '#4B371C'
ctx.fillStyle = '#4B371C'
ctx.fillRect(127,175,15,35)
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
ctx.strokeStyle = '#1E90FF'
ctx.fillStyle = '#1E90FF'
ctx.fillRect(0,260,110,100)
ctx.closePath()

ctx.beginPath()
ctx.lineWidth = 2;
ctx.strokeStyle = '#1E90FF'
ctx.fillStyle = '#1E90FF'
ctx.fillRect(0,210,30,250)
ctx.closePath()

ctx.beginPath()
ctx.lineWidth = 2;
ctx.strokeStyle = '#1E90FF'
ctx.fillStyle = '#1E90FF'
ctx.arc(100,290,30,0.5*Math.PI,2.5*Math.PI)
ctx.fill()
ctx.stroke()
ctx.closePath()

ctx.beginPath()
ctx.lineWidth = 2;
ctx.strokeStyle = '#1E90FF'
ctx.fillStyle = '#1E90FF'
ctx.arc(0,207,30,0.5*Math.PI,2.5*Math.PI)
ctx.fill()
ctx.stroke()
ctx.closePath()


ctx.beginPath()
ctx.lineWidth = 2;
ctx.strokeStyle = '#FF7F50'
ctx.fillStyle = '#FF7F50'
ctx.moveTo(100,130)
ctx.lineTo(135,100)
ctx.lineTo(170,130)
ctx.fill()
ctx.stroke()
ctx.closePath()
