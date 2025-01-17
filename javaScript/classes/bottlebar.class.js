class BottleBar extends DrawableObejects {
    IMAGES_BOTTLE_BAR = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/100.png',
    ];
    bottlePersentage = 100;

    
    constructor() {
        super();
        this.loadImages(this.IMAGES_BOTTLE_BAR);
        this.x = 10;
        this.y = 75;
        this.width = 200;
        this.height = 60;
        this.setPercentage(0, this.IMAGES_BOTTLE_BAR);
    }
}