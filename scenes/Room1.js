class Room1 extends Phaser.Scene{
    constructor(){
        super({ key: 'Room1' });
    }

    init() {
        console.log('Escena Level');
        this.width = this.sys.game.canvas.width;
        this.height = this.sys.game.canvas.height;

        this.minScale = 0.75;
        this.maxScale = 1;
        this.deckSizeDelta = 0.05;

        this.bgDelta = 2;

    }
    
    preload() {
        this.load.path = './assets/';
        this.load.image(['Puntero', 'antorchab1',
        'cuadro', 'cuadrodragon', 'puertaclosed'
        ]);

        this.load.image('cuartov1','fondocuartos/cuartov1.png');
       
        this.load.spritesheet('king','Medieval King/Sprites/Idle.png',
        {
            frameWidth: 160,
            frameHeight: 111
        })

        this.load.spritesheet('king_r','Medieval King/Sprites/Run.png',
        {
            frameWidth: 160,
            frameHeight: 111,
        })

        this.load.spritesheet('king_j','Medieval King/Sprites/Jump.png',
        {
            frameWidth: 160,
            frameHeight: 111,
        })

        this.load.spritesheet('king_q','Medieval King/Sprites/Attack1.png',
        {
            frameWidth: 160,
            frameHeight: 111
        })

        this.load.spritesheet('king_e','Medieval King/Sprites/Attack2.png',
        {
            frameWidth: 160,
            frameHeight: 111
        })
        
        // this.load.spritesheet('antorchab','antorchab/antorchab/antorchab.png',
        // {
        //     frameWidth: 160,
        //     frameHeight: 111
        // });

        this.load.atlas('hearts','hearts/hearts.png','hearts/hearts_atlas.json');
        this.load.animation('heartsAnim','hearts/hearts_anim.json');
        this.load.atlas('potions','potions/potions.png','potions/potions_atlas.json');
        this.load.animation('potionsAnim','potions/potions_anim.json');
        this.load.atlas('antorchab','antorchab/antorchab/antorchab.png','antorchab/antorchab/antorchab_atlas.json');
        this.load.animation('antorchabAnim', 'antorchab/antorchab_anim/antorchab_anim.json');
        this.load.atlas('puerta','puerta/puerta/puerta.png','puerta/puerta/puerta_atlas.json');
        this.load.animation('puertaAnim', 'puerta/puerta_anim/puerta_anim.json');
    }

    create(){
        this.cameras.main.setBackgroundColor(0x0000ff)
        // tiempo en milisegundos
        .fadeIn(2000);
        this.fondo1 = this.add.image(0, 0, "cuartov1").setOrigin(0, 0).setDepth(-1).setScale(1.0);

        // this.bgs = [
        //     this.add.image(0, 0, "cuartov1").setOrigin(0, 0).setDepth(-1),
        //     this.add.image(0, 0, "cuartov1").setOrigin(0, 0).setDepth(-1),
        // ];
        // this.bgs[1].x = this.bgs[0].displayWidth;
        const keyCodes = Phaser.Input.Keyboard.KeyCodes;
        const eventos = Phaser.Input.Events;
        
        //Creacion Antorchas
        // this.antorchas = [];
        // for(let index = 0; index < 10; index++) {
        //     this.antorchas[index] = this.add.sprite((index*430 )+ 100, 360, 'antorchab', 0);
        //     // this.antorchas[index] = this.add.image(index*230, 420, "antorchab1").setOrigin(1, 1).setDepth(0);
        //     this.antorchas[index].setScale(4);
        // }
        //Creacion cuadro
        this.cuadro = this.add.image(650, 400, 'cuadro').setScale(0.15).setDepth(0);
        //Creacion Puertas
        // for(let index = 0; index < 10; index++) {
            // this.puertas[index] = this.add.image(index*1000, 770, "puertaCerrada").setOrigin(1, 1).setDepth(0);
            //this.puertas[index].setScale(0.6);
            // if(index%2==0){
                this.puerta = this.add.sprite(100, 380, "puertaclosed").setDepth(0);
                this.puerta.setScale(1.4);
        //     }
        // }

        //Creacion de cofre de prueba
        // this.cofre = this.add.sprite(1100, 680, 'cofreanimado', 0).setScale(0.8);
        
        this.suelo = this.physics.add.image(300, 800, 'BlockBlock');
        this.suelo.body.setAllowGravity(false);
        this.suelo.setImmovable();
        this.suelo.body.setSize(100000, 55, true);
        //visible false
        this.suelo.setVisible(false);
        //FISICAS KING
        //this.king = this.add.sprite(300, 520, 'king', 0).setScale(5);
        this.king = this.physics.add.image(300, 520, 'king').setScale(5);
        //this.physics.add.existing(this.king, true); //FORMA2 true
        this.king.body.setCollideWorldBounds(true);
        // this.king.body.setCircle(25);
        // this.king.body.setSquare(25);
        this.king.body.setSize(35, 53, true);
        this.king.body.setOffset(62, 52);
        this.physics.add.collider(this.king, this.suelo, () => {
            //this.yoshi.setVelocity(0);
            //this.yoshi.setAcceleration(0);
        });
        // this.king = this.physics.add.image(300, 720, 'king');
        // this.king.body.setAllowGravity(false);
        //this.text = this.add.text(500, 250, 'PRESIONA\t[→] [D]', {
        //     fontFamily: 'Consolas', fontSize: '30px'
        // }).setDepth(10);

        //Animaciones del personaje king
        this.anims.create({
            // Nombre de la animación
            key: 'king_idle',
            // Se cargan los frames por números
            // NOTA: generateFrameNames() se
            // usa cuando ya existe un Atlas
            frames: this.anims.generateFrameNumbers('king', {
                start: 0,
                end: 7
            }),
            repeat: -1,
            frameRate: 6
        });

        //this.king.anims.play('king_idle');

        this.anims.create({
            // Nombre de la animación
            key: 'king_run',
            // Se cargan los frames por números
            // NOTA: generateFrameNames() se
            // usa cuando ya existe un Atlas
            frames: this.anims.generateFrameNumbers('king_r', {
                start: 0,
                end: 7
            }),
            repeat: -1,
            frameRate: 6
        });

        this.anims.create({
            // Nombre de la animación
            key: 'king_jump',
            // Se cargan los frames por números
            // NOTA: generateFrameNames() se
            // usa cuando ya existe un Atlas
            frames: this.anims.generateFrameNumbers('king_j', {
                start: 0,
                end: 1
            }),
            repeat: -1,
            frameRate: 1
        });

        this.anims.create({
            // Nombre de la animación
            key: 'king_attack',
            // Se cargan los frames por números
            // NOTA: generateFrameNames() se
            // usa cuando ya existe un Atlas
            frames: this.anims.generateFrameNumbers('king_q', {
                start: 0,
                end: 3
            }),
            repeat: 0,
            frameRate: 2
        });

        this.anims.create({
            // Nombre de la animación
            key: 'king_attack2',
            // Se cargan los frames por números
            // NOTA: generateFrameNames() se
            // usa cuando ya existe un Atlas
            frames: this.anims.generateFrameNumbers('king_e', {
                start: 0,
                end: 3
            }),
            repeat: 0,
            frameRate: 2
        });

        // this.anims.create({
        //     // Nombre de la animación
        //     key: 'antorchab_iddle',
        //     // Se cargan los frames por números
        //     // NOTA: generateFrameNames() se
        //     // usa cuando ya existe un Atlas
        //     frames: this.anims.generateFrameNumbers('antorchab', {
        //         start: 0,
        //         end: 5
        //     }),
        //     repeat: -1,
        //     frameRate: 6
        // });
        
        //Mapeo de teclas
        this.teclas = this.input.keyboard.addKeys({
            izq: keyCodes.A,
            der: keyCodes.D,
            powQ: keyCodes.Q,
            powR: keyCodes.R,
            kspc: keyCodes.SPACE
        });

        this.teclas.izq.on('down', ()=>{
                this.king.flipX = true;
                ////this.king.anims.play('king_run');
                this.king.body.setAcceleration(-800);
        });
        this.teclas.izq.on('up', ()=>{
            //this.king.anims.stop();
            //this.king.anims.play('king_idle');
            this.king.body.setAcceleration(0);
            this.king.body.setVelocity(0);
        });

        this.teclas.der.on('down', ()=>{
            this.king.flipX = false;
            //this.king.anims.play('king_run');
            this.king.body.setAcceleration(800);
            this.king.body.setVelocity(0);
        });
        this.teclas.der.on('up', ()=>{
            //this.king.anims.stop();
            //this.king.anims.play('king_idle');
            this.king.body.setAcceleration(0);
            this.king.body.setVelocity(0);
        });

        this.teclas.powQ.on('down', ()=>{
            this.king.play('king_attack');
        });
        this.teclas.powQ.on('up', ()=>{
            //this.king.anims.stop();
            //this.king.play('king_idle');
        });

        this.teclas.powR.on('down', ()=>{
            this.king.play('king_attack2');
        });
        this.teclas.powR.on('up', ()=>{
            //this.king.anims.stop();
            //this.king.play('king_idle');
        });

        this.teclas.kspc.on('down', ()=>{
            //this.king.play('king_jump');
            this.king.body.setVelocityY(-800);
        });
        this.teclas.kspc.on('up', ()=>{
            //this.king.anims.stop();
            //this.king.play('king_idle');
            this.king.body.setVelocityY(800);
        });

        //Grupo de corazones
        this.grupo = this.physics.add.group({
            key: 'hearts',
            repeat: 5,
            setXY: {
            x: 150,
            y: 100,
            stepX: 100
            }
            });
            this.grupo.children.iterate( (corazon) => {
                corazon.setScale(1);
                corazon.body.setAllowGravity(false);
            } );
        this.grupo.playAnimation('hearts');

        this.grupo.getChildren()[3].visible = false;
        this.grupo.getChildren()[4].visible = false;
        this.grupo.getChildren()[5].visible = false;

        // this.grupoC = this.physics.add.group({
        //     key: 'hearts',
        //     repeat: 2,
        //     setXY: {
        //         x: 1000,
        //         y: 700,
        //         stepX: 750
        //     }
        // });
        // this.grupoC.children.iterate((corazon) => {
        //     corazon.setScale(1);
        //     corazon.body.setAllowGravity(false);
        // });
        // this.grupoC.playAnimation('hearts');

        //Grupo de pociones
        this.grupo2 = this.physics.add.group({
            key: 'potions',
            repeat: 3,
            setXY: {
            x: 1450,
            y: 100,
            stepX: 100,
            }
            });
        this.grupo2.children.iterate( (posion) => {
            posion.setScale(0.8);
            posion.body.setAllowGravity(false);
        } );
        this.grupo2.playAnimation('potions');

        //Grupo linea de bloques
        // this.grupoO = this.physics.add.group({
        //     key: 'lineBlock',
        //     repeat: 3,
        //     setXY: {
        //         x: 1000,
        //         y: 300,
        //         stepX: 900
        //     }
        // });
        // this.grupoO.children.iterate( (block) => {
        //     block.body.setAllowGravity(false);
        //     this.physics.add.existing(block, true); //FORMA2 true
        //     block.setImmovable();
        // } );
        // this.physics.add.collider(this.king, this.grupoO, () => {
        //     // this.king.setVelocity(0);
        //     // this.king.setAcceleration(0);
        //     console.log("colision rey con bloque largo");
        // });
        // //2d0 grupo de linea de bloques
        // this.grupoO2 = this.physics.add.group({
        //     key: 'lineBlock',
        //     repeat: 4,
        //     setXY: {
        //         x: 1193,
        //         y: 300,
        //         stepX: 900
        //     }
        // });
        // this.grupoO2.children.iterate( (block) => {
        //     block.body.setAllowGravity(false);
        //     this.physics.add.existing(block, true); //FORMA2 true
        //     block.setImmovable();
        // } );
        // this.physics.add.collider(this.king, this.grupoO2, () => {
        //     // this.king.setVelocity(0);
        //     // this.king.setAcceleration(0);
        //     console.log("colision rey con bloque largo");
        // });
        // //3er grupo de linea de bloques
        // this.grupoO3 = this.physics.add.group({
        //     key: 'BlockBlock',
        //     repeat: 2,
        //     setXY: {
        //         x: 800,
        //         y: 466,
        //         stepX: 900
        //     }
        // });
        // this.grupoO3.children.iterate( (block) => {
        //     block.body.setAllowGravity(false);
        //     this.physics.add.existing(block, true); //FORMA2 true
        //     block.setImmovable();
        // } );
        // this.physics.add.collider(this.king, this.grupoO3, () => {
        //     // this.king.setVelocity(0);
        //     // this.king.setAcceleration(0);
        //     console.log("colision rey con bloque");
        // });

        //Grupo de pinchos
        // for (let index = 0; index < 10; index++) {
        //     this.antorchas[index].anims.play('antorchab'); 
        // }
       

    }
    update(time, delta) {
      
    }
}

export default Room1;