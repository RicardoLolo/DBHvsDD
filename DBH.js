class DBH {
    x;
    y;
    width;
    height;

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 100;
        this.height =150;
    }

    drawDBH() {
        ctx.drawImage(document.getElementById("DBH"), this.x, this.y, this.width, this.height);
    }

//     jump(){
//         this.x = 40 ; this.y =0;
//     }
    moveUp() {
        this.y -= 30;
    }
    moveDown() {
        this.y += 2;

    }
}