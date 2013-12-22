/**
Class: KeyboardHandler
*/
MEDIAWEB.KeyboardHandler = function ($context, key) {

    this.$context   = $context;
    this.$nav       = $context.find('nav');
    this.key        = key;

    this.handle = function (key) {
        switch (key.which) {
            case 37:
                MEDIAWEB.KeyboardHandler($("#main")).arrow.left();
                break;
            case 38:
                MEDIAWEB.KeyboardHandler($("#main")).arrow.up();
                break;
            case 39:
                MEDIAWEB.KeyboardHandler($("#main")).arrow.right();
                break;
            case 40:
                MEDIAWEB.KeyboardHandler($("#main")).arrow.down();
                break;
            case 13:
                MEDIAWEB.KeyboardHandler($("#main")).enter();
                break;
            case 27:
                MEDIAWEB.KeyboardHandler($("#main")).esc();
            default:
                return;
        }
        key.preventDefault();
    }

    return {

        //esc: function() {
        //    alert("escape");
        //},

        //enter: function() {
        //    alert("enter");
        //},

        //arrow: (function() {
        //    return {
        //        up: function() {
        //            alert("up");
        //        },
        //        down: function () {
        //            alert("down");
        //        },
        //        left: function () {
        //            //alert("left");
        //            this.$nav.find
        //        },
        //        right: function () {
        //            alert("right");
        //        }
        //    }
        //})()


    }
};