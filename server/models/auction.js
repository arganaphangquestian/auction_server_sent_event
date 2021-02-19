"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Auction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Auction.init(
    {
      car_id: DataTypes.INTEGER,
      status: DataTypes.STRING,
      started_at: DataTypes.BIGINT,
    },
    {
      sequelize,
      modelName: "Auction",
    }
  );
  return Auction;
};
