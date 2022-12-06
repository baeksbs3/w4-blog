"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
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
  Comments.init(
    {
      commentId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
      },

      comment: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Comments",
    }
  );
  return Comments;
};
