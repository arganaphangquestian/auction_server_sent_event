"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Bid extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bid.init(
    {
      auction_id: DataTypes.INTEGER,
      price: DataTypes.DECIMAL(20, 2),
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Bid",
    }
  );
  return Bid;
};
