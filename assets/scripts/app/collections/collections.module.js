// Combine all collections in one module
define([ 'users', 'slideShows', 'slides', 'elements', 'elementTypes' ], function( Users, SlideShows, Slides, Elements, ElementTypes ) {

    // Return an object that Backbone-collection
    return {
        Users: {
            resourceName: 'users',
            collection: Users
        },
        SlideShows: {
            resourceName: 'slideshows',
            collection: SlideShows
        },
        Slides: {
            resourceName: 'slides',
            collection: Slides
        },
        Elements: {
            resourceName: 'elements',
            collection: Elements
        },
        ElementTypes: {
            resourceName: 'elementTypes',
            collection: ElementTypes
        }
    }
});