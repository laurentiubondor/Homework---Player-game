class Player {

    constructor(x, y, width, height) {
        this.player = document.getElementById("player")
        this.x = x
        this.y = y
        this.player.style.width = width
        this.player.style.height = height
    }

    leftArrowPressed() {
        this.x = this.x - 3

        this.player.style.left = `${ this.x+ "px"}`;
        if (this.x <= 0) {
            this.x = 3
        }
    }

    rightArrowPressed() {

        this.x = this.x + 3

        this.player.style.left = `${ this.x+ "px"}`;
        if (this.x >= 378) {
            this.x = 377
        }

    }

    upArrowPressed() {
        this.y = this.y - 3

        this.player.style.top = `${this.y  + "px"}`;

        if (this.y <= 0) {
            this.y = 3
        }
    }

    downArrowPressed() {
        this.y = this.y + 3

        this.player.style.top = `${this.y + "px"}`;
        if (this.y >= 378) {
            this.y = 377
        }
    }
}






class Obstacle {
    constructor(x, y, width, height) {
        this.obstacle = document.getElementById("obstacle")
        this.x = x
        this.y = y
        this.obstacle.style.width = width
        this.obstacle.style.height = height


    }
}