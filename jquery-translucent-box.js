(function($){
    $.fn.translucentBox = function(opacity, color, additionalBackgroundBoxCss)
    {
        return this.each(function(){
            var element = $(this);
            var ieOpacity = Math.round(opacity * 100);
            
            var relativeContainer = $("<div>")
                .css("position", "relative");
            element.wrap(relativeContainer);
            relativeContainer = element.parent();
            var absoluteTopRightCss = {
                "position": "absolute",
                "top": "0px",
                "left": "0px"
            };
            element.css(absoluteTopRightCss)
                .css("z-index", "1");
            var background = $("<div>")
                .css(absoluteTopRightCss)
                .css(additionalBackgroundBoxCss)
                .css({
                    "background": color,
                    "opacity": opacity, 
                    "width": element.outerWidth(),
                    "height": element.outerHeight(),
                    "margin": element.css("margin"),
                    "-ms-filter": "alpha(opacity=" + ieOpacity + ")"
                })
                .css("background", color)
                .css("opacity", opacity)
                .appendTo(relativeContainer);
            
        
            
        });
    }
})(jQuery);

(function( $ ){

  $.fn.lockDimensions = function( type ) {  

    return this.each(function() {

      var $this = $(this);

      if ( !type || type == 'width' ) {
        $this.width( $this.width() );
      }

      if ( !type || type == 'height' ) {
        $this.height( $this.height() );
      }

    });

  };
})( jQuery );