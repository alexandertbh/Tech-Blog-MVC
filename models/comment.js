const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config");

class Comment extends Model {}

Comment.init(
  {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
  }
);

module.exports = Comment;
