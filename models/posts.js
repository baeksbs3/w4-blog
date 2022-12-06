"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     * static associate(models) {
      this.belongsTo(models.Users, {
        foreignKey: "userId",
        targetKey: "userId",
      });
      this.hasMany(models.Comments, {
        foreignKey: "postId",
        sourceKey: "postId",
      });
      this.hasMany(models.PostLikes, {
        foreignKey: "postId",
        sourceKey: "postId",
      });
    }
     */
    static associate(models) {
      this.belongsTo(models.Users, {
        foreignKey: "userId",
        targetKey: "userId",
      });
      this.hasMany(models.Comments, {
        foreignKey: "postId",
        sourceKey: "postId",
      });
      this.hasMany(models.PostLikes, {
        foreignKey: "postId",
        sourceKey: "postId",
      });
    }
  }
  Posts.init(
    {
      postId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: DataTypes.STRING,
      contents: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Posts",
    }
  );
  return Posts;
};
