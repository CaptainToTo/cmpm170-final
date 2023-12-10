class DialogBox {
    constructor(scene) {
        this.scene = scene;
        this.rect = scene.add.rectangle(0, 1080 * 1.2, 1920 * 2, 1080, 0x00);
        this.text = scene.add.text(1920 / 2, 1080 * 0.8,
            "Test Text",
            {
                font:"60px Arial",
                align: "center",
                color: "#FFFFFF",
            }).setOrigin(0.5, 0.5);
    }

    setText(text) {
        this.text.setText(text);
    }
}