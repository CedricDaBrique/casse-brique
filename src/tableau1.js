class tableau1 extends Phaser.Scene {


    preload() {

        this.load.image('carre', 'Asset/carre.png')
        this.load.image('cercle', 'Asset/cercle.png')
    }

    create() {
        console.log("Test")
        this.hauteur = 800
        this.largeur = 800

        this.score = 0;

        this.vie = 3;

        //Barre haut
        this.haut = this.physics.add.image(0, 0, 'carre').setOrigin(0, 0);
        this.haut.setDisplaySize(this.largeur, 20)
        this.haut.body.setAllowGravity(false)
        this.haut.body.setImmovable(true)


        //Raquette joueur
        this.bas = this.physics.add.image(350, 700, 'carre').setOrigin(0, 0);
        this.bas.setDisplaySize(this.largeur, 20)
        this.bas.setDisplaySize(200, 20)
        this.haut.body.setAllowGravity(false)
        this.bas.setImmovable(true)

        // Barre droite
        this.droite = this.physics.add.sprite(780, 0, 'carre').setOrigin(0, 0)
        this.droite.setDisplaySize(20, this.largeur)
        this.droite.body.setAllowGravity(false)
        this.droite.setImmovable(true);

        //Barre Gauche
        this.gauche = this.physics.add.sprite(0, 0, 'carre').setOrigin(0, 0)
        this.gauche.setDisplaySize(20, this.largeur)
        this.gauche.body.setAllowGravity(false)
        this.gauche.setImmovable(true);


        // Balle
        this.balle = this.physics.add.image(this.largeur / 2, this.hauteur / 2, 'cercle').setOrigin(0, 0);
        this.balle.setDisplaySize(20, 20)
        this.balle.body.setBounce(1.1, 1.1)
        this.balle.body.setAllowGravity(false)
        this.balle.setVelocity(250)
        this.balle.body.setMaxVelocity(500, 500)
        this.physics.add.collider(this.balle, this.bas)
        this.physics.add.collider(this.balle, this.haut)
        this.physics.add.collider(this.balle, this.gauche)
        this.physics.add.collider(this.balle, this.droite)




        //Brique
        for (let y = 5; y < 10; y++) {
            for (let x = 2; x < 11; x++) {

                let rbrique = this.physics.add.sprite(x * 62, y * 32, 'carre').setOrigin(0, 0)
                rbrique.setDisplaySize(60, 30)
                rbrique.setImmovable(true)
                rbrique.body.setAllowGravity(false)
                this.physics.add.collider(this.balle,rbrique, function(){
                    rbrique.destroy(true);
                });






            }
        }



        this.initKeyboard();
    }


    initKeyboard() {
        let me = this;
        this.input.keyboard.on('keydown', function (kevent) {
            switch (kevent.keyCode) {
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.bas.setVelocityX(-300)

                    break;

                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                    me.bas.setVelocityX(300)

                    break

            }
        });
        this.input.keyboard.on('keyup', function (kevent) {
            switch (kevent.keyCode) {
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.bas.setVelocityX(0)

                    break;

                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                    me.bas.setVelocityX(0)

                    break;

            }
        });
    }
}
