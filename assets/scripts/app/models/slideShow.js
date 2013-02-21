define([ 'backbone', 'slide', 'slides' ], function( Backbone, Slide, Slides ) {

    return Backbone.RelationalModel.extend({
        relations: [{
            type: Backbone.HasMany,
            key: 'slides',
            relatedModel: Slide,
            collectionType: Slides,
            reverseRelation: {
                key: 'slideShow',
                includeInJSON: 'id'
                // 'relatedModel' is automatically set to 'SlideShow'; the 'relationType' to 'HasOne'.
            }
        }],
        defaults: {
            name: 'Hello world slideshow!',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        validate: function(attrs) {
        }
    });
});