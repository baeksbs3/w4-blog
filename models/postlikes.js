"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PostLikes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     * static associate(models) {
      this.belongsTo(models.Users, {
        foreignKey: "userId",
        targetKey: "userId",
      });
      this.belongsTo(models.Posts, {
        foreignKey: "postId",
        targetKey: "postId",
      });
    }
     */
    static associate(models) {
      this.belongsTo(models.Users, {
        foreignKey: "userId",
        targetKey: "userId",
      });
      this.belongsTo(models.Posts, {
        foreignKey: "postId",
        targetKey: "postId",
      });
    }
  }
  PostLikes.init(
    {
      postlikesId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "PostLikes",
    }
  );
  return PostLikes;
};
