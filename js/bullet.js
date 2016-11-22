/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function Bullet() {
    /* Fields*/
    this.picture = "";
    this.damage = 1;
    this.position = {x: 0, y: 0};
    this.direction = {x: 1, y: 0};
    this.scale = 1;


    /* GETTER */
    /**
     * Get dammage bullet
     * @returns {Number}
     */
    this.getDamage = function() {
        return this.damage;
    };

    /**
     * Get bullet position
     * @returns {Bullet.position}
     */
    this.getPosition = function() {
        return this.position;
    };

    /**
     * Get bullet direction
     * @returns {Bullet.direction}
     */
    this.getDirection = function() {
        return this.direction;
    };

    /**
     * Get the picture path 
     * @returns {String}
     */
    this.getPicture = function() {
        return this.picture;
    };

    /**
     * Get the scale
     * @returns {Number}
     */
    this.getScale = function() {
        return this.scale;
    };

    /* SETTER */

    /**
     * Set the scale
     * @param {numeric} param_scale Scale
     */
    this.setScale = function(param_scale) {
        this.scale = param_scale;
    };
    
    /**
     * Set bullet damage
     * @param {Numeric} param_damage
     */
    this.setDamage = function(param_damage) {
        this.damage = param_damage;
    };

    /**
     * Set bullet position 
     * @param {Object} param_position Position in (x, y)
     */
    this.setPosition = function(param_position) {
        this.position = param_position;
    };

    /**
     * Set bullet direction
     * @param {Object} param_direction Direction in (x,y)
     */
    this.setDirection = function(param_direction) {
        this.direction = param_direction;
    };

    /**
     * Set bullet picture
     * @param {String} param_picture Picture path
     */
    this.setPicture = function(param_picture) {
        this.picture = param_picture;
    };

    /* METHODS */
    /**
     * Initialize a bullet
     * @param {Object} param_position Position in {x,y}
     * @param {String} param_picture Picture path
     * @param {Object} param_direction Direction in {x,y}
     * @param {Numeric} param_scale Scale
     * @param {Numeric} param_damage Damage
     */
    this.initialize = function(param_position, param_picture, param_direction, param_scale, param_damage) {
        this.setPosition(param_position);
        this.setPicture(param_picture);
        this.setDirection(param_direction);
        this.setScale(param_scale);
        this.setDamage(param_damage);
    };

    /**
     * Draw the bullet
     * @param {type} ctx
     */
    this.draw = function(ctx) {
        ctx.drawImage({
            source: this.getPicture(),
            x: this.getPosition().x, y: this.getPosition().y,
            scale: this.getScale()
        });
    };
}

