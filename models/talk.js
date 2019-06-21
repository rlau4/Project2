module.exports = function(sequelize, DataTypes) {
  var Talk = sequelize.define("Talk", {
    ownerName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    }
  });

  Talk.associate = function(models) {
    Talk.belongsTo(models.Owner, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Talk;
};
