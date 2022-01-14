'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Comments.init({
      commentId: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          required: true,
      },
    userId: {
        type: DataTypes.INTEGER,
        required: true,
    },
    postId: {
        type: DataTypes.INTEGER,
        required: true,
    },
    comment: {
        type: DataTypes.STRING,
        required: true
    },
  }, {
    sequelize,
    modelName: 'Comments',
  });
  return Comments;
};