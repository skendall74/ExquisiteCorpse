module.exports = function(sequelize, DataTypes) {
    var user = sequelize.define("user", {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        }, 
        email: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    return user;
}