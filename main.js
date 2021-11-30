let cvs
let ctx

cvs = document.getElementById('canvas')
ctx = cvs.getContext('2d');
let dbh = new DBH(50, cvs.height - 150);
let rc = [new RC(1000, 530)];
let score = 0;
let highScore = 0;
sessionStorage.setItem('high_score0', 0)

function start() {
    music.play()
    clearCanvas();
    // dbh.drawDBH()
    dbh.drawDBH();
    dbh.moveDown();

    for (let i = 0; i < rc.length; i++) {
        rc[i].drawRC();
        rc[i].moveLeft();

        if (rc[i].x === 400) {
            rc.push(new RC());
        }
        if (dbh.y + dbh.height-7 >= rc[i].y &&
            dbh.x + dbh.width-7 >= rc[i].x && rc[i].x + rc[i].width >= dbh.x) {
            // music.pause() ;
            // alert("né nữa đi bạn êi");
            // alert("né tđn được :)");
            // alert("xin");
            // alert(" vĩnh biệt cụ Hào");
            // return
        }
        if (rc[i].x === dbh.x - rc[i].width) {
            score++;
        }
    }
    ctx.fillStyle = "#090909";
    ctx.font = "24px Dancing Script";
    ctx.fillText("Score : " + score, 730, cvs.height - 550);
    ctx.fillText("High Score : " + sessionStorage['high_score' + (sessionStorage.length - 1)], 550, cvs.height - 550);
    checkHighScore()


    for (let j = 0; j < sessionStorage.length; j++) {
        if (sessionStorage['high_score' + (sessionStorage.length - 1)] < score) {
            highScore = score;
            sessionStorage.setItem('high_score' + (j + 1), highScore)
        }
    }
    // }
    requestAnimationFrame(start);
}
//
function checkHighScore() {
    for (let j = 0; j < sessionStorage.length; j++) {
        if (sessionStorage['high_score' + (sessionStorage.length - 1)] < score) {
            highScore = score;
            sessionStorage.setItem('high_score' + (j + 1), highScore)
        }
    }
}

function restart() {
    location.reload();
    document.getElementById('body__score').style.display = "none";
    start();
}

function moveDBH() {
    if (dbh.y === 450) {
        dbh.jump();
    }
}

window.addEventListener("keydown", moveDBH);

function clearCanvas() {
    ctx.clearRect(0, 0, cvs.width, cvs.height);
}


 let music = new Audio()
music.src = "yt1s.com - Alan Silvestri  Portals From Avengers EndgameAudio Only.mp3"

start()

