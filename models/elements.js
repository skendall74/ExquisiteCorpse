module.exports = function(sequelize, DataTypes) {
    var element = sequelize.define("element", {
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1, 1000]
            }
        },
        commit: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
        // id | Sequelize will populate this
        // Created_at | Sequelize will populate this
        // Updated_at | Sequelize will populate this
    });

    element.associate = function(models) {
        // Associate Element with Stories. Adds user_id to Permission table
        element.belongsTo(models.user, {
            foreignKey: {
                name: "user_id",
                allowNull: false
            }
        });

        // Associate Permission with Stories. Adds story_id to Permission table
        element.belongsTo(models.stories, {
            foreignKey: {
                name: "story_id",
                allowNull: false
            }
        })
    };
    
    return element;
}