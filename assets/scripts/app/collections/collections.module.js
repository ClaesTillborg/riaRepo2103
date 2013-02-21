// Combine all collections in one module
define( [ 'users', 'slideShows', 'slides', 'elements', 'elementTypes' ], function( Users, SlideShows, Slides, Elements, ElementTypes  ) {

    // Return an objekt
    return {
        Users: function() { return Users; },
        SlideShows: function() {return SlideShows; },
        Slides: function() {return Slides; },
        Elements: function() {return Elements; },
        ElementTypes: function() {return ElementTypes; }
    }
});