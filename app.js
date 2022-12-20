class App
{
    runApplication()
    {
        console.log("hello world!");
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        g.beginPath()
        g.fillStyle = "grey";
        g.moveTo(200,300);
        g.lineTo(300,100);
        g.lineTo(700,200);
        g.lineTo(600,400);
        g.lineTo(200,300);
        g.closePath();
        g.stroke();
        g.fill();        
        console.log(canvas);
        g.beginPath()
        g.fillStyle = "brown";
        g.moveTo(700,200);
        g.lineTo(600,400);
        g.lineTo(800,300);
        g.lineTo(700,200);
        g.closePath();
        g.stroke();
        g.fill();        
        console.log(canvas); 
        g.beginPath()   
        g.fillStyle = "brown"; 
        g.moveTo(800,300);
        g.lineTo(800,500);
        g.lineTo(600,600);
        g.lineTo(600,400);
        g.closePath();
        g.stroke();
        g.fill();        
        console.log(canvas); 
        g.beginPath()
        g.fillStyle = "brown";
        g.lineTo(600,600);
        g.lineTo(600,400);
        g.lineTo(200,300);
        g.lineTo(200,500);
        g.lineTo(600,600);
        g.closePath();
        g.stroke();
        g.fill();        
        console.log(canvas); 
        g.beginPath()
        g.fillStyle ="blue";
        g.moveTo(780,500);
        g.lineTo(620,570);
        g.lineTo(620,400);
        g.lineTo(780,320);
        g.closePath();
        g.stroke();
        g.fill();  
        console.log(canvas);
        g.beginPath()
        g.fillStyle = "black";
        g.moveTo(500,180);
        g.lineTo(500,100);
        g.lineTo(550,100);
        g.lineTo(550,200);
        g.closePath();
        g.stroke();
        g.fill();  
        console.log(canvas);
    }
}
let app = new App();
app.runApplication();


