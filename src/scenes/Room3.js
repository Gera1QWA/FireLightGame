class Room3 extends Phaser.Scene {
    constructor() {
        super({ key: 'Room3' });
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

        this.load.image('violetroom', 'scenaroom/violetroom.png');

        this.load.spritesheet('violet','PSecundarios/violeta.png',
        {
            frameWidth: 123,
            frameHeight: 172
        })
    }

    create(){
        // this.scene.stop('Level');
        // // this.cameras.main.setBackgroundColor(0x0000ff)
        // // // tiempo en milisegundos
        // // .fadeIn(2000);

        

        this.fondo = this.add.image(0, 0, "violetroom").setOrigin(0, 0).setDepth(-1);
        
        this.violet = this.add.sprite(1750, 620, 'violet', 0).setScale(1.8);
        this.violet.flipX = true;
        this.anims.create({
            // Nombre de la animación
            key: 'violet-idle',
            // Se cargan los frames por números
            // NOTA: generateFrameNames() se
            // usa cuando ya existe un Atlas
            frames: this.anims.generateFrameNumbers('violet', {
                start: 0,
                end: 5
            }),
            repeat: -1,
            frameRate: 6
        });

        this.violet.anims.play('violet-idle');

    }
    update(time, delta) {
    }
}

export default Room3;