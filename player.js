class Player {
    constructor(scene, width, height) {
        this.scene = scene;
        this.rect = scene.add.rectangle(0, 0, width, height, 0xff8585, 0.7);
        this.width = width;
        this.height = height;
        this.x1 = 0;
        this.y1 = 0;
        this.x2 = 0;
        this.y2 = 0;
        this.isCooking = false;

        const player = this;

        scene.input.on("pointermove", (pointer) => {
            player.rect.setPosition(pointer.x, pointer.y);
            player.x1 = pointer.x - (player.width / 2);
            player.x2 = pointer.x + (player.width / 2);
            player.y1 = pointer.y - (player.height / 2);
            player.y2 = pointer.y + (player.height / 2);
        });
        scene.input.on("pointerdown", (pointer) => {
            player.rect.setAlpha(0.95);
            this.isCooking = true;
        });
        scene.input.on("pointerup", (pointer) => {
            player.rect.setAlpha(0.7);
            this.isCooking = false;
            player.scene.turnTimer = 0;
        });
    }
}