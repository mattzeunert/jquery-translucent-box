jQuery Translucent Box
======================

jQuery plugin for making a div's background translucent but not it's contents. Works in IE7+ and modern browsers.

    $("#content").translucentBox(.5, "white", {"border-radius": "4px"});
    $("#box").translucentBox(opacity, color, additionalBackgroundBoxCss);

**opacity** 

Value between 0 (transparent) and 1(opaque).

**color**

The background color of the translucent background. If this is white and you put the box on top of a black background the background of the box will be gray.

**additionalBackgroundBoxCss** *optional*

Additional CSS that needs to be added to the translucent background box. For example if the content div has rounded corners these also need to be added to the translucent background box.
    


