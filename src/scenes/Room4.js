class Room4 extends Phaser.Scene {
    constructor() {
        super({ key: 'Room4' });
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

        this.load.image('redroom', 'scenaroom/redroom.png');

    }

    create(){

        

        this.fondo = this.add.image(0, 0, "redroom").setOrigin(0, 0).setDepth(-1);



    }
    update(time, delta) {
    }
}

export default Room4;