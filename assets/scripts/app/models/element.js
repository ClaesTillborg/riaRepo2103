define([ 'backbone', 'elementType' ], function( Backbone, ElementType ) {

    return Backbone.RelationalModel.extend({
        relations: [{
            type: Backbone.HasOne,
            key: 'type',
            relatedModel: ElementType,
            reverseRelation: {
                type: Backbone.HasOne,
                key: 'element'
            }
        }],
        defaults: {
            content: 'Hello world!',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        validate: function( attrs ) {
        }
    });
});