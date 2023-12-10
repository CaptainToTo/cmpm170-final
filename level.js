class Level extends Phaser.Scene {
    constructor() {
        super("level")
    }

    create() {
        this.dialogBox = new DialogBox(this);

        // meat
        this.meat = [];
        this.meat.push(
            new Food(this, 100, 100, 300, 300)
        )

        this.player = new Player(this, 100, 100);

        this.turnTimer = 0;
    }

    update(time, delta) {
        if (this.player.isCooking) {
            this.turnTimer += delta;
            if (this.turnTimer >= 0.2) {
                for (const meat of this.meat) {
                    if (meat.isOverlapping(this.player)) {
                        meat.cook(0.2);
                    }
                }
            }
        }
    }
}