// Combine all models in one module
define([ 'user', 'slideShow', 'slide', 'element', 'elementType' ], function( User, SlideShow, Slide, Element, ElementType ) {

    // Return a Backbone-model
    return {
        User: function() { return User(); },
        SlideShow: function() {return SlideShow(); },
        Slide: function() {return Slide(); },
        Element: function() {return Element(); },
        ElementType: function() {return ElementTypes(); }
    }
});