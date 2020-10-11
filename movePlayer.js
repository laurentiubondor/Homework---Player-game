const rect1 = new Player(100, 100, 20 + "px", 20 + "px");


const rect2 = new Obstacle(0, 0, 40 + "px", 100 + "px");





const moveplayer = event =>

    {
        switch (event.which) {
            case 37:
                rect1.leftArrowPressed();
                break;

            case 39:
                rect1.rightArrowPressed();
                break;

            case 38:
                rect1.upArrowPressed();
                break;

            case 40:
                rect1.downArrowPressed();
                break;

        }

        collision()


    }

document.body.addEventListener("keydown", moveplayer)


function collision() {


    if (rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.height + rect1.y > rect2.y) {

        console.log("atingere")
    }



}