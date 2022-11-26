class Room1 extends Phaser.Scene {
    constructor() {
        super({ key: 'Room1' });
    }

    init() {

        this.width = this.sys.game.canvas.width;
        this.height = this.sys.game.canvas.height;

        this.minScale = 0.75;
        this.maxScale = 1;
        this.deckSizeDelta = 0.05;

        this.bgDelta = 2;

    }
    init(dato) {
        console.log('Escena ScenaA');
        console.log('Haz hecho', dato, 'puntos');
        }
    
    preload() {
        this.load.path = './assets/';
        this.load.image(['Puntero']);

        this.load.image('blueroom', 'scenaroom/blueroom.png');

        this.load.atlas('makuiddle','Maku/MakuIddle/original/makuiddle.png','Maku/MakuIddle/original/makuiddle_atlas.json');
        this.load.animation('makuAnim','Maku/makuiddle_anim/makuiddle_anim.json');
        this.load.atlas('omiiddle','Omi/omiiddle/omiiddle.png','Omi/omiiddle/omiiddle_atlas.json');
        this.load.animation('omiiAnim','Omi/omiiddle_anim/omiiddle_anim.json');
        this.load.atlas('kemi','Kemi/kemi/kemi.png','Kemi/kemi/kemi_atlas.json');
        this.load.animation('kemiAnim','Kemi/kemi_anim/kemi_anim.json');
    }

    create(){
        this.cameras.main.setBackgroundColor(0x000000)
        // tiempo en milisegundos
        .fadeIn(2000);
        // this.scene.stop('Level');
        // // this.cameras.main.setBackgroundColor(0x0000ff)
        // // // tiempo en milisegundos
        // // .fadeIn(2000);

        

        this.fondo = this.add.image(0, 0, "blueroom").setOrigin(0, 0).setDepth(-1);
        this.maku = this.add.sprite(1300, 550, "Puntero", 0).setDepth(0).setScale(15);
        this.maku.flipX = true;
        this.maku.anims.play("kemi");

        // const keyCodes = Phaser.Input.Keyboard.KeyCodes;
        // // const eventos = Phaser.Input.Events;



    }
    update(time, delta) {
    }
}

export default Room1;