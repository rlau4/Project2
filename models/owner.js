module.exports = function(sequelize, DataTypes) {
  var Owner = sequelize.define("Owner", {
    name: DataTypes.STRING,
    email: DataTypes.STRING
  });

  Owner.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Owner.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };
  
  return Owner;
};
