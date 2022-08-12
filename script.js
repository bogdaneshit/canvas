let canvas = document.getElementById('canvas1');
let ctx = canvas.getContext('2d');

let draw = false;

let cords = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.addEventListener('mouseup', function(){
    draw = false;
    ctx.beginPath();
});

canvas.addEventListener('mousedown', function(){
    draw = true;
});

ctx.lineWidth = 5 * 2;

canvas.addEventListener('mousemove',function(e){
    if (draw){
        cords.push([e.clientX,e.clientY]);
        ctx.strokeStyle = "red";
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();

        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(e.clientX, e.clientY, 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }
});

function save(){
    localStorage.setItem('cords', JSON.stringify(cords));
}

document.addEventListener('keydown', function(e){
    console.log(e.code);

    if (e.code == 'KeyS') {
        save();
        console.log('save');
    } else if (e.code == 'KeyC'){
        // clear();
    }
})