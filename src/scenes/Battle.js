class Battle extends Phaser.Scene{
    constructor(){
        super({ key: 'Battle' });
    }

    init(){
        console.log('Escena Battle');
        this.width = this.sys.game.canvas.width;
        this.height = this.sys.game.canvas.height;
    }

    preload(){
        this.load.path = './assets/';

        this.load.image('1', 'Battle/1.png');
        this.load.image('Button', 'Battle/Button.png');
    }

    create(){
        this.battle = this.add.image(this.width/2, this.height/2, '1');

        this.btn1 = this.add.image(this.width/4, this.height/8, 'Button').setScale(0.35, 0.15);
        this.btn2 = this.add.image(this.width/4, this.height/3.5, 'Button').setScale(0.35, 0.15);
        this.btn3 = this.add.image(this.width/1.5, this.height/8, 'Button').setScale(0.35, 0.15);
        this.btn4 = this.add.image(this.width/1.5, this.height/3.5, 'Button').setScale(0.35, 0.15);
    }

    update(time, delta){}
}

export default Battle;