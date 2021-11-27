class RC {
    x;
    y;
    width;
    height;

    constructor() {
        this.x = 1000;
        this.y = 530;
        this.width = 100;
        this.height = 70;
    }

    drawRC() {
        if (score>5){
            this.height = 100
            this.width = 140
            this.y = 500
        }
        ctx.drawImage(document.getElementById("RC"), this.x, this.y, this.width, this.height);
    }

    moveLeft() {
        this.x -= 5;
    }
}

