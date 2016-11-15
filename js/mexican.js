/*
 * Project     : MexicanFight
 * Class       : Mexican
 * Description : Class of Mexican player
 * Version     : 1.0
 * Date        : 08.11.2016
 */

function Mexican() {
    /* Constante*/
    MAX_LIFE = 4;
    MAX_BEER = 3;
    MAX_BULLET = 5;
    DEFAULT_SCALE = 0.25;
    DEFAULT_SPEED = 0.5;
    DEFAULT_DIRECTION = {x: 0, y: 0};

    /* Fields */
    this.picture = "";
    this.life = MAX_LIFE;
    this.lifeUp = MAX_BEER;
    this.scale = DEFAULT_SCALE;
    this.bullet = MAX_BULLET;
    this.position = {x: 0, y: 0};
    this.size = {w: 51, h: 69};
    this.speed = DEFAULT_SPEED;
    this.direction = DEFAULT_DIRECTION;
    this.lifeUpdTaking = false;

    /* Getter */
    /**
     * Get Mexican position
     * @returns {Position in {x, y}}
     */
    this.getPosition = function() {
        return this.position;
    };

    /**
     * Get Mexican speed
     * @returns {Number|DEFAULT_SPEED}
     */
    this.getSpeed = function() {
        return this.speed;
    };

    /**
     * Get picture scale
     * @returns {Number|DEFAULT_SCALE}
     */
    this.getScale = function() {
        return this.scale;
    };

    /**
     * Get Mexican life
     * @returns {Number|MAX_LIFE}
     */
    this.getLife = function() {
        return this.life;
    };

    /**
     * Get number of lifeUp
     * @returns {Number|MAX_BEER}
     */
    this.getLifeUp = function() {
        return this.lifeUp;
    };

    /**
     * Get number of bullet
     * @returns {MAX_BULLET|Number}
     */
    this.getBullet = function() {
        return this.bullet;
    };

    /**
     * Get path picture
     * @returns {String}
     */
    this.getPicture = function() {
        return this.picture;
    };

    /**
     * Get the sprite size
     * @returns {Mexican.size}
     */
    this.getSize = function() {
        return this.size;
    };

    /**
     * Get direction
     * @returns {Numeric|DEFAULT_DIRECTION}
     */
    this.getDirection = function() {
        return this.direction;
    };

    /* Setter */

    /**
     * Set the Y direction
     * @param {Numeric} param_dirY Y value
     */
    this.setDirectionY = function(param_dirY) {
        this.direction = {x: this.getDirection().x, y: param_dirY};
    };

    /**
     * Set mexican life
     * @param {Number} param_newLife New mexican life
     */
    this.setLife = function(param_newLife) {
        if (param_newLife >= 0 && param_newLife <= MAX_LIFE)
            this.life = param_newLife;
    };

    /**
     * Set number of bullet
     * @param {Numeric} param_newBullet Number of bullet
     */
    this.setBullet = function(param_newBullet) {
        if (param_newBullet >= 0 && param_newBullet <= MAX_BULLET)
            this.bullet = param_newBullet;
    };

    /**
     * Set the new position
     * @param {Numeric} param_newPosition Position in {x, y}
     */
    this.setPosition = function(param_newPosition) {
        this.position = param_newPosition;
    };

    /**
     * Set lifeUp
     * @param {Number} param_newLifeUp New lifeUp number
     */
    this.setLifeUp = function(param_newLifeUp) {
        if (param_newLifeUp >= 0 && param_newLifeUp <= MAX_BEER)
            this.lifeUp = param_newLifeUp;
    };

    /* Methods */
    /**
     * Initialize mexican
     * @param {Object} param_position position in {x, y}
     * @param {string} param_picture Path of the mexican picture
     */
    this.initialize = function(param_position, param_picture) {
        this.position = param_position;
        this.picture = param_picture;
    };

    /**
     * Use lifeUp for regenerate a tacos
     */
    this.takeLifeUp = function() {
        if (this.getLifeUp() > 0)
        {
            this.setLife(this.getLife() + 1);
            this.setLifeUp(this.getLifeUp() - 1);
        }
    };

    /**
     * Shoot a bullet
     */
    this.shoot = function() {
        if (this.getBullet() > 0)
        {
            this.setBullet(this.getBullet() - 1);
        }
    };

    /**
     * Information of the object
     * @returns {infoMexican|String}
     */
    this.toString = function() {
        infoMexican = "Position : " + this.getPosition().x + ", " + this.getPosition().y + "\n";
        infoMexican += "Life : " + this.getLife() + "\nLifeUp : " + this.getLifeUp() + "\nPicture : " + this.getPicture() + "\nScale : " + this.getScale() + "\n";
        infoMexican += "Bullets: " + this.getBullet() + "\n";
        infoMexican += "Direction: " + this.getDirection().x + ", " + this.getDirection().y + "\n";
        infoMexican += "Size : " + this.getSize().w + ", " + this.getSize().h;

        return infoMexican;
    };

    /**
     * Move the mexican on the y axe
     * @param {Canvas} ctx
     */
    this.move = function(ctx) {
        var positionY = this.getPosition().y + this.getDirection().y * this.getSpeed();
        pos = this.getPosition();
        pos.y = ((positionY >= ctx[0].clientTop) && (positionY <= ctx[0].clientHeight - 400)) ? positionY : pos.y;

        this.setPosition(pos);
    };

    /**
     * Event when key is down
     * @param {type} key
     */
    this.keydownEvent = function(key) {
        pressedKey = key.which || key.keyCode;

        if (pressedKey === 87) {
            this.setDirectionY(-1);
        } else if (pressedKey === 83) {
            this.setDirectionY(1);
        }

        if (pressedKey === 68 && !this.lifeUpTaking) {
            console.log("----------------- BEFORE LIFE UP -----------------");
            console.log(mex.toString());
            console.log("----------------- -------------- -----------------");
            this.takeLifeUp();
            this.lifeUpTaking = true;
            console.log("Taking life up");
            console.log("----------------- AFTER LIFE UP -----------------");
            console.log(mex.toString());
            console.log("----------------- -------------- ----------------");
        }
    };

    /**
     * Event when a key is up
     * @param {type} key
     */
    this.keyupEvent = function(key) {
        var pressedKey = key.which || key.keyCode;

        if (pressedKey === 87) {
            this.setDirectionY(0);
        } else if (pressedKey === 83) {
            this.setDirectionY(0);
        }

        if (pressedKey === 68 && this.lifeUpTaking) {
            this.lifeUpTaking = false;
        }
    };

    /**
     * Draw the Mexican
     * @param {Canvas} ctx Canvas $('canvas')
     */
    this.draw = function(ctx) {
        ctx.drawImage({
            source: this.getPicture(),
            x: this.getPosition().x, y: this.getPosition().y,
            scale: this.getScale()
        });
    };
}
