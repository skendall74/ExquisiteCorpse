module.exports = function(sequelize, DataTypes) {
    var stories = sequelize.define("stories", {
        story_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        }
    })

    return stories;
}