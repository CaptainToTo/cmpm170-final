const dialog = [
    {threshold: 0, text: "Oh! Will you be making steak for dinner? That's one of my favorites!"},
    {threshold: 1500, text: "It smells great! Do you cook often?"},
    {threshold: 7000, text: "I can look up a recipe if you'd like."},
    {threshold: 12000, text: "So what do you do for work?"},
    {threshold: 17000, text: "Is this usually how you cook steak?"},
    {threshold: 19000, text: "It's almost there!"},
    {threshold: 22000, text: "Wow! That looks great!"},
    {threshold: 25000, text: "I personally prefer my steaks with less char,\nbut I'm open to something new."},
    {threshold: 33000, text: "I don't think it needs much more than that..."},
    {threshold: 39000, text: "Is this like, a trend or something?"},
    {threshold: 45000, text: "...I think I'll just order take-out"},
]

class Level extends Phaser.Scene {
    constructor() {
        super("level")
    }

    create() {
        this.dialogBox = new DialogBox(this);

        // meat
        this.meat = [];
        const width = 10;
        const height = 10;
        const rows = 40;
        const cols = 150;
        const x = 300;
        const y = 200;
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                this.meat.push(
                    new Food(this, x + (width * j), y + (height * i), width, height)
                )
            }
        }

        this.player = new Player(this, 100, 100);

        this.turnTimer = 0;
    }

    update(time, delta) {
        if (this.player.isCooking) {
            this.turnTimer += delta;
            if (this.turnTimer >= 0.1) {
                for (const meat of this.meat) {
                    if (this.player.isOverlapping(meat)) {
                        meat.cook(0.2);
                    }
                }
            }
        }
        let sum = 0;
        for (const meat of this.meat) {
            sum += meat.cookLevel;
        }
        let option = dialog[0].text;
        for (const obj of dialog) {
            if (sum > obj.threshold) {
                option = obj.text;
            }
        }
        this.dialogBox.setText(option);
    }
}