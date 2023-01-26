class App
{
    runApplication()
    {
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");

        g.font = "30px Arial";
        g.fillText("Merry Christmas!", 500,90)

        g.fillStyle = "black";
        g.beginPath()
        g.moveTo(0,320);
        g.lineTo(0,50);
        g.lineTo(1200,50);
        g.lineTo(1200,320);
        g.closePath();
        g.stroke();
        console.log(canvas);

        g.fillStyle = "grey";
        g.beginPath()
        g.moveTo(0,320);
        g.lineTo(0,350);
        g.lineTo(1200,350);
        g.lineTo(1200,320);
        g.closePath();
        g.stroke();
        g.fill();
        console.log(canvas);

        g.beginPath();
        g.arc(300, 290, 30, 0,Math.PI*2,);
        g.stroke();

        g.beginPath();
        g.arc(300, 240, 20, 0,Math.PI*2);
        g.stroke();
    }
}

let app = new App();
app.runApplication();