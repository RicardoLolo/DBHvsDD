let cvs
let ctx
function init(){
    cvs = document.getElementById('canvas')
    ctx = cvs.getContext('2d');
    let dbh = new DBH(0,0);
    let rc = [new RC(500,400,(cvs.width + 50))];
    rc.drawRC()
    dbh.drawDBH()
}
function start() {
    // clearCanvas();
    DBH.drawDBH();
    DBH.moveDown();

    for (let i = 0; i < RC.length; i++) {
        rc[i].drawRC();
        rc[i].moveLeft();
        ctx.fillStyle = "#090909";
        ctx.font = "20px Varela Round";
        // ctx.fillText("Score : " + score, 10, cvs.height - 20);
        // ctx.fillText("High Score : " + sessionStorage['high_score' + (sessionStorage.length - 1)], 170, cvs.height - 20);

        // if (score >= 9) {
        //     spacePipe = 89;
        // } else if (score >= 4) {
        //     spacePipe = 120;
        // } else {
        //     spacePipe = 150;
        // }

        // if (rc[i].x === spacePipe) {
        //     let randomY = Math.floor(Math.random() * (-110 + 310) - 310);
        //     // let gap = Math.floor(Math.random() * (90 - 80) + 80);
        //     rc.push(new RC(cvs.width + 50, randomY + 380 + gap));
        // }
        //
        // if (DBH.y <= 0 || DBH.y + DBH.height .y ||
        //
        //     DBH.x + DBH.width - 3 >= rc[i].x && DBH.x <= rc[i].x + rc[i].width - 3 && DBH.y + DBH.height - 3 >= rc[i].y) {
        //     stopGame();
        //     return
        // }

        // if (pN[i].x === bird.x - 40) {
        //     score++;
        //     getScore.play();
        // }

        for (let j = 0; j < sessionStorage.length; j++) {
            if (sessionStorage['high_score' + (sessionStorage.length - 1)] < score) {
                highScore = score;
                sessionStorage.setItem('high_score' + (j + 1), highScore)
            }
        }
    }
    requestAnimationFrame(start);
}

start();
// function startGame() {
//     start();
//     document.getElementById('startGame').style.display = "none";
// }

// function stopGame() {
//     document.getElementById('score__title').innerHTML = `${score}`;
//     document.getElementById('body__score').style.display = "block";
//     document.getElementById('music').pause();
//
// }
//
// function restart() {
//     location.reload();
//     document.getElementById('body__score').style.display = "none";
//     start();
// }
//
// function moveDBH() {
//     DBH.moveUp();
//     DBH.play();
// }
//
// window.addEventListener("keydown", moveBird);
//
// function clearCanvas() {
//     ctx.clearRect(0, 0, cvs.width, cvs.height);
// }
//
// window.addEventListener('keydown', musicPlay);















// function jump(){
//     if (DBH.classList != "animeter"){
//         DBH.classList.add("animater");
//     }
//     setTimeout(function (){
//         DBH.classList.remove("animater");
//     },500);
// }
//
// let checkDead = setInterval(function (){
//     let DBHTop = parseInt(window.getComputedStyle(DBH).getPropertyValue("top"));
//     let RCLeft = parseInt(window.getComputedStyle(RC).getPropertyValue("left"));
//     if (RCLeft < 20 && RCLeft > 0 && DBHTop >=130){
//         RC.style.animation = "none";
//         RC.style.display = "none";
//         alert("xin vĩnh biệt cụ Hào");
//     }
//
// },10);