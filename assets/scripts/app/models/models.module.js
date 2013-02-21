// Combine all models in one module
define([ 'user', 'slideShow', 'slide', 'element', 'elementType' ], function( User, SlideShow, Slide, Element, ElementType ) {

    // Return an object with access to all the Backbone-models
    return {
        User: User,
        SlideShow: SlideShow,
        Slide: Slide,
        Element: Element,
        ElementType: ElementType
    }
});