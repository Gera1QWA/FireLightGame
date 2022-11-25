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

        this.load.spritesheet('desconocido','PSecundarios/desconocidolev1.png',
        {
            frameWidth: 64,
            frameHeight: 64
        })

    }

    create(){

        this.fondo = this.add.image(0, 0, "redroom").setOrigin(0, 0).setDepth(-1);

        this.desconocido = this.add.sprite(1600, 570, 'desconocido', 0).setScale(7).setDepth(3);
        //this.violet.flipX = true;
        this.anims.create({
            // Nombre de la animación
            key: 'desconocido-idle',
            // Se cargan los frames por números
            // NOTA: generateFrameNames() se
            // usa cuando ya existe un Atlas
            frames: this.anims.generateFrameNumbers('desconocido', {
                start: 0,
                end: 3
            }),
            repeat: -1,
            frameRate: 3
        });

        this.desconocido.anims.play('desconocido-idle');


    }
    update(time, delta) {
    }
}

export default Room4;