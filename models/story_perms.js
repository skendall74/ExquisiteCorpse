module.exports = function(sequelize, DataTypes) {
    var Permission = sequelize.define("Permission", {
        // id | Sequelize will populate this
        // Created_at | Sequelize will populate this
        // Updated_at | Sequelize will populate this

    });

    // Associate Permission with Stories. Adds story_id to Permission table
    Permission.associate = function(models) {
        Permission.belongsTo(models.Stories, {
            foreignKey: {
                allowNull: false
            }
        })
    };

    // Associate Permission with Users. Adds user_id to Permission table
    Permission.associate= function(models) {
        Permission.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        })
    };

    return Permission;
}