module.exports = function (sequelize, DataTypes) {
    var story_perms = sequelize.define("story_perms", {
        // id | Sequelize will populate this
        // Created_at | Sequelize will populate this
        // Updated_at | Sequelize will populate this

    });

    story_perms.associate = function (models) {
        // Associate story_perms with Stories. Adds story_id to story_perms table
        story_perms.belongsTo(models.stories, {
            foreignKey: {
                allowNull: false
            }
        });

        // Associate story_perms with Users. Adds user_id to story_perms table
        story_perms.belongsTo(models.user, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return story_perms;
}