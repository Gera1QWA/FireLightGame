class Room2 extends Phaser.Scene {
    constructor() {
        super({ key: 'Room2' });
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

        this.load.image('brownroom', 'scenaroom/brownroom.png');

        this.load.spritesheet('warrior','PSecundarios/warrior_Idle.png',
        {
            frameWidth: 54,
            frameHeight: 44
        })

    }

    create(){

        this.fondo = this.add.image(0, 0, "brownroom").setOrigin(0, 0).setDepth(-1);
        this.warrior = this.add.sprite(1300, 620, 'warrior', 0).setScale(7);
        this.warrior.flipX = true;
        this.anims.create({
            // Nombre de la animación
            key: 'warrior-idle',
            // Se cargan los frames por números
            // NOTA: generateFrameNames() se
            // usa cuando ya existe un Atlas
            frames: this.anims.generateFrameNumbers('warrior', {
                start: 0,
                end: 5
            }),
            repeat: -1,
            frameRate: 6
        });

        // this.warrior.anims.play('warrior_idle');
        this.warrior.anims.play('warrior-idle');

        // this.anims.create({
        //     // Nombre de la animación
        //     key: 'warrior_idle',
        //     // Se cargan los frames por números
        //     // NOTA: generateFrameNames() se
        //     // usa cuando ya existe un Atlas
        //     frames: this.anims.generateFrameNumbers('king', {
        //         start: 0,
        //         end: 7
        //     }),
        //     repeat: -1,
        //     frameRate: 6
        // });

        // //this.king.anims.play('king_idle');

        // const keyCodes = Phaser.Input.Keyboard.KeyCodes;
        // // const eventos = Phaser.Input.Events;



    }
    update(time, delta) {
    }
}

export default Room2;