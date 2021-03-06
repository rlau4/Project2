module.exports = function(sequelize, DataTypes) {
  var Owner = sequelize.define("Owner", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    pic: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  });

  // Owner.associate = function(models) {
  //   Owner.hasMany(models.Dog, {
  //     onDelete: "cascade"
  //   });
  // };

  return Owner;
};
