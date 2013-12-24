MEDIAWEB.FontHelper = (function () {
    return {
        maxEM: function ($container, contentText, beginEM) {
            if ($container) {
                if (!contentText) {
                    contentText = $container.text();
                }
                if (!beginEM) {
                    beginEM = 3;
                }
                var em = beginEM;
                $('body').append('<span id="width-measure" style="position: absolute; visibility: hidden;whitespace: nowrap;font-family:' + $container.css('font-family') + '; font-size: ' + beginEM + 'em">' + contentText + '</span>');
                while ($('#width-measure').width() > $container.width()) {
                    $('#width-measure').css('font-size', (em -= 0.1) + 'em');
                }
                $('#width-measure').remove();
                return em;
            }
            
            return 0;
        }
    }
})();