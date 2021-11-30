class DBH {
    x;
    y;
    width;
    height;

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 100;
        this.height = 150;
    }
    //vẽ đối tượng Đường Bá Hào
    drawDBH() {
        ctx.drawImage(document.getElementById("DBH"), this.x, this.y, this.width, this.height);
    }
    //xử lý hành vi lên xuống né Bạn Đức của đối tượng
    jump() {
        this.y -= 300;
        if (score>5){

            this.y -= 100
        }
    }
    moveDown() {
        if (this.y < 450) {
            this.y += 4;
        } else {
            this.y = 450;
        }

    }
}