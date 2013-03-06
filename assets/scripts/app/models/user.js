define( [ 'backbone', 'slideShow', 'slideShows' ], function( Backbone, SlideShow, SlideShows ) {

    return Backbone.Model.extend({
        relations: [{
            type: Backbone.HasMany,
            key: 'slideShows',
            relatedModel: SlideShow,
            collectionType: SlideShows,
            reverseRelation: {
                key: 'Owner',
                includeInJSON: 'id'
                // 'relatedModel' is automatically set to 'User'; the 'relationType' to 'HasOne'.
            }
        }],
        defaults: {
            name: '',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        validate: function( attrs ) {
            if(attrs.name == '') {
                attrs.name = 'Anonymous';
            }
        }
    });
});