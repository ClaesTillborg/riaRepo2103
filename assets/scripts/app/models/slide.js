define([ 'backbone', 'element', 'elements' ], function( Backbone, Element, Elements ) {

    return Backbone.RelationalModel.extend({
        relations: [{
            type: Backbone.HasMany,
            key: 'elements',
            relatedModel: Element,
            collectionType: Elements,
            reverseRelation: {
                key: 'slide',
                includeInJSON: 'id'
                // 'relatedModel' is automatically set to 'Slide'; the 'relationType' to 'HasOne'.
            }
        }],
        defaults: {
            createdAt: new Date(),
            updatedAt: new Date()
        },
        validate: function( attrs ) {
        }
    });
});
