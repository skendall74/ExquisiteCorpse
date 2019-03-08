module.exports = function(sequelize, DataTypes) {
    var Stories = sequelize.define("Stories", {
        story_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        }
    })

    return Stories;
}