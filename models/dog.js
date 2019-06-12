module.exports = function(sequelize, DataTypes) {
  var Dog = sequelize.define("Dog", {
    dogName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    breed: {
      type: DataTypes.STRING,
      allowNull: false
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pic: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    personality: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Dog.associate = function(models) {
    Dog.belongsTo(models.Owner, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Dog;
};
