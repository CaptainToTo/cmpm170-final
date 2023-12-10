const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    backgroundColor: 0xc7a3ec,
    scene: [Level],
    powerPerformance: "high-performance",
    title: "final"
});