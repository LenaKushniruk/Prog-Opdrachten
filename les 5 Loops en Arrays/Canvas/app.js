class App{
    runApplication(){
        let myCanvas = document.getElementById("canvasId");
        let g = myCanvas.getContext("2d");

        myCanvas.addEventListener('mousemove', (evt)=>{
            let MousePos = this.getMousePos(myCanvas, evt);
            console.log(MousePos.x)

            g.clearRect(0, 0, myCanvas.clientWidth, myCanvas.height);
           
            g.beginPath();
            g.fillStyle = "green";
            g.rect(MousePos.x, MousePos.y, 30, 30);
            g.stroke();
            g.fill();
        })  
    
    
    }

     getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }
}

let app = new App();
app.runApplication();