const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const Products = sequelize.define("Products", {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIcrement: true },
        name: { type: DataTypes.STRING },
        price: { type: DataTypes.INTEGER },
        description: { type: DataTypes.TEXT },
    });
    return Products;
};
