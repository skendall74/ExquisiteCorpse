module.exports = function(sequelize, DataTypes) {
    var Element = sequelize.define("Element", {
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1, 1000]
            }
        }
        // id | Sequelize will populate this
        // Created_at | Sequelize will populate this
        // Updated_at | Sequelize will populate this
    });

    // Associate Element with Stories. Adds story_id to Permission table
    Element.associate = function(models) {
        Element.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        })
    };

    // Associate Permission with Stories. Adds story_id to Permission table
    Element.associate = function(models) {
        Element.belongsTo(models.Stories, {
            foreignKey: {
                allowNull: false
            }
        })
    };

    return Element;
}