
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

        this.btn5 = this.add.image(this.width/4, this.height/2, 'Button').setScale(0.35, 0.15);
        this.btn6 = this.add.image(this.width/4, this.height/1.5, 'Button').setScale(0.35, 0.15);
        this.btn7 = this.add.image(this.width/1.5, this.height/2, 'Button').setScale(0.35, 0.15);
        this.btn8 = this.add.image(this.width/1.5, this.height/1.5, 'Button').setScale(0.35, 0.15);

        this.btn9 = this.add.image(this.width/1.5, this.height/1.15, 'Button').setScale(0.35, 0.15);
        this.btn10 = this.add.image(this.width/4, this.height/1.15, 'Button').setScale(0.35, 0.15);

        this.txt4 = this.add.text(250, 700, "Akaya Telivigala", {fontFamily: 'Akaya Telivigala', fontSize: '45px', color: 'black'});
        this.txt3 = this.add.text(1030, 115, "IM Fell English SC", {fontFamily: 'IM Fell English SC', fontSize: '45px', color: 'black'});
        this.txt5 = this.add.text(250, 520, "Alegreya Sans SC", {fontFamily: 'Alegreya Sans SC', fontSize: '45px', color: 'black'});
        this.txt7 = this.add.text(1030, 520, "Rock Salt", {fontFamily: 'Rock Salt', fontSize: '45px', color: 'black'});
        
        this.txt8 = this.add.text(1030, 700, "Bebas Neue", {fontFamily: 'Bebas Neue', fontSize: '45px', color: 'black'});
        this.txt1 = this.add.text(250, 115, "Teko", {fontFamily: 'Teko', fontSize: '45px', color: 'black'});
        this.txt2 = this.add.text(250, 285, "Unica One", {fontFamily: 'Unica One', fontSize: '45px', color: 'black'});
        this.txt6 = this.add.text(1030, 285, "VT323", {fontFamily: 'VT323', fontSize: '45px', color: 'black'});

        this.txt9 = this.add.text(250, 920, "Rubik Mono One", {fontFamily: 'Rubik Mono One', fontSize: '45px', color: 'black'});
        this.txt10 = this.add.text(1030, 920, "Six Caps", {fontFamily: 'Six Caps', fontSize: '45px', color: 'black'});


    }

    update(time, delta){}
}

export default Battle;