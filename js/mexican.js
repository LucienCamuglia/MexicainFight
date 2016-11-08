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

    /* Fields */
    this.picture = "";
    this.life = MAX_LIFE;
    this.lifeUp = MAX_BEER;
    this.scale = DEFAULT_SCALE;
    this.bullet = MAX_BULLET;
    this.position = {w: 0, h: 0};

    /* Getter */
    /**
     * Get Mexican position
     * @returns {Position in {x, y}}
     */
    this.getPosition = function() {
        return this.position;
    };
    
    /**
     * Get picture scale
     * @returns {Number|DEFAULT_SCALE}
     */
    this.getScale = function () {
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
    this.getPicture = function () {
        return this.picture;
    };

    /* Setter */
    /**
     * Set mexican life
     * @param {Number} param_newLife New mexican life
     */
    this.setLife = function(param_newLife) {
        if (param_newLife >= 0 && param_newLife <= MAX_LIFE)
            this.life = param_newLife;
    };
    
    this.setBullet = function(param_newBullet) {
        if (param_newBullet >= 0 && param_newBullet <= MAX_BULLET)
            this.bullet = param_newBullet;
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
        infoMexican += "Bullets: " + this.getBullet();
        
        return infoMexican;
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
