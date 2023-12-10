const meatColors = [
    0xc34431,
    0x8c1d0c,
    0x911f06,
    0x832d03,
    0x6a1d07,
    0x5e1a07,
    0x421001,
    0x310d02,
    0x220800,
    0x0b0301,
]


class Food {
    constructor(scene, x1, y1, width, height) {
        this.cookLevel = 0;
        this.scene = scene;
        this.rect = this.scene.add.rectangle(x1, y1, width, height, meatColors[parseInt(this.cookLevel)]).setOrigin(0);
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x1 + width;
        this.y2 = y1 + height;
    }

    isOverlapping(player) {
        if (this.x1 <= player.x1 && player.x1 <= this.x2) {
            if (this.y1 <= player.y1 && player.y1 <= this.y2) {
                return true;
            }
        }
        if (this.x1 <= player.x2 && player.x2 <= this.x2) {
            if (this.y1 <= player.y2 && player.y2 <= this.y2) {
                return true;
            }
        }
        return false;
    }

    cook(cookAmount) {
        if (this.cookLevel > meatColors.length) return;
        this.cookLevel += cookAmount;
        this.rect.setFillStyle(meatColors[parseInt(this.cookLevel)] ? meatColors[parseInt(this.cookLevel)] : meatColors[meatColors.length - 1]);
    }
}