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
    //vẽ đối đượng Rào cản( đức đậu)
    drawRC() {
        if (score>5){
            this.height = 100
            this.width = 140
            this.y = 500
        }
        ctx.drawImage(document.getElementById("RC"), this.x, this.y, this.width, this.height);
    }
    //xử lý hành vi lao tới Đường Bá Hào
    moveLeft() {
        this.x -= 5;
        if (score>10){
            this.x -= 10

        }
        if(score> 20){
            this.x -= 20
        }
        if (score>30){
            this.x -=40
        }
    }
}

