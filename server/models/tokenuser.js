'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TokenUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  TokenUser.init({
    user_id: DataTypes.INTEGER,
    total: DataTypes.SMALLINT,
    token_type_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TokenUser',
  });
  return TokenUser;
};