const db = require("../models/index");
const productQuery = require("./queries/product.queries");
const { calculateLimitAndOffset, paginate } = require("paginate-info");

//db.sequelize.sync();
const Product = db.product;

module.exports = class ProductService {
  static async getAllProducts(data) {
      try {
        const { currentPage, pageSize } = data;
        const { limit, offset } = calculateLimitAndOffset(
          currentPage,
          pageSize
        );
        const { rows, count } = await Product.findAndCountAll({ limit, offset });
        const meta = paginate(currentPage, count, rows, pageSize);
        return { rows, meta };
      } catch (error) {
        return error;
      }
  }

  static async addProduct(data) {
    try {
      const dataJSON = {
        category: data.categoryName,
        description: data.categoryDescription,
        productName: data.productName,
        productDescription: data.productDescription,
        price: data.price,
        picture: data.picture,
        brand: data.brand,
      };
      const rows = await productQuery.insertProduct(dataJSON);
      // Pluck the ids of the cars
      return rows;
    } catch (error) {
      console.log(`Could not add product ${error}`);
    }
  }
};
