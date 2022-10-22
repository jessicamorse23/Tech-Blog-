// I received this code from instructional staff

const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config /connection');

class Post extends Model {}

Post.init(
  {
    title: DataTypes.STRING,
    body: DataTypes.STRING
  },

  {
    sequelize,
    timestamps: false, 
    underscored: true, 
    modelName: "post",
  }
);

module.exports = Post;
