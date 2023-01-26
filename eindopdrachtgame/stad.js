class App
{
    runApplication()
    {
        console.log("hello world!");

        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");

        g.beginPath()
        g.fillStyle = "red";
        g.moveTo(100,250);
        g.lineTo(100,320);
        g.lineTo(200,320);
        g.lineTo(200,250);
        g.lineTo(150,200);
        g.closePath();
        g.stroke();
        g.fill()
        console.log(canvas);

        g.beginPath()
        g.fillStyle = "yellow";
        g.moveTo(120,260);
        g.lineTo(180,260);
        g.lineTo(180,300);
        g.lineTo(120,300);
        g.closePath();
        g.stroke();
        g.fill()
        console.log(canvas);

        g.beginPath()
        g.fillStyle = "brown";
        g.moveTo(400,250);
        g.lineTo(400,320);
        g.lineTo(800,320);
        g.lineTo(800,250);
        g.lineTo(600,200);
        g.closePath();
        g.stroke();
        g.fill()
        console.log(canvas);

        g.beginPath()
        g.fillStyle = "green";
        g.moveTo(980,320);
        g.lineTo(980,270);
        g.lineTo(900,270);
        g.lineTo(980,200);
        g.lineTo(1070,270);
        g.lineTo(1000,270);
        g.lineTo(1000,320)
        g.closePath();
        g.stroke();
        g.fill()
        canvas.log(canvas);
    }
    
}
let app = new App();
app.runApplication();
