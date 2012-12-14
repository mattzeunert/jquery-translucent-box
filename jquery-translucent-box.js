(function($){
    $.fn.translucentBox = function(opacity, color, additionalBackgroundBoxCss)
    {
        return this.each(function(){
            var element = $(this);
            var ieOpacity = Math.round(opacity * 100);
            
            var background = $("<div>")
                .css(additionalBackgroundBoxCss)
                .css({
                	"position": "absolute",
                	"top": "0px",
                	"left": "0px",
                    "background": color,
                    "opacity": opacity, 
                    "-ms-filter": "alpha(opacity=" + ieOpacity + ")"
                });
                
            var randomClass = "rand" + Math.floor(Math.random() * 9999999);
                  
            var contentWrapper = $("<div>")
            	.css("position", "absolute")
            	.css("z-index", "1")
            	.addClass(randomClass);
                  
            element.children().wrapAll(contentWrapper)
          	element.append(background);
          	element.children().wrapAll("<div style='position: relative'></div>");
          	
          	$(background).css("width", $("." + randomClass).width());
          	$(background).css("height", $("." + randomClass).height());
          	$("." + randomClass).removeClass(randomClass);
         });
    }
})(jQuery);