class RC {
    x;
    y;
    width;
    height;

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 100;
        this.height =70;
    }
    drawRC() {
        ctx.drawImage(document.getElementById("RC"), this.x, this.y, this.width, this.height);
    }

    moveLeft() {
        if (score >= 10) {
            this.x -= 3;
        } else if (score >= 5) {
            this.x -= 2;
        }else {
            this.x -= 1;
        }
    }
}
