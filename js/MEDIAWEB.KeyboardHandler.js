/**
Class: KeyboardHandler
*/
MEDIAWEB.KeyboardHandler = function () {

    this.$context   = $('#main');
    this.$nav       = this.$context.find('#home-navigation');
    this.mode      = this.$context.find('#mode').val();

    MEDIAWEB.KeyboardHandler.prototype.handle = function (key) {
        if (key) {
            switch (key.which) {
                case 37:
                    alert("left");
                    break;
                case 38:
                    alert("up");
                    break;
                case 39:
                    alert("right");
                    break;
                case 40:
                    alert("down");
                    break;
                case 13:
                    alert("enter");
                    break;
                case 27:
                    alert("esc");
                default:
                    return;
            }
            key.preventDefault();
        }
    }
};