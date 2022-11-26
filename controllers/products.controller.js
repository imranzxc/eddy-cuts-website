import ProductModel from "../models/Product.model.js";

export default {
  getAll: async (req, res) => {
    try {
      const products = await ProductModel.find();
      res.json(products);
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: "Не удалось получить товары",
      });
    }
  },

  remove: async (req, res) => {
    try {
      const productId = req.params.id;

      ProductModel.findByIdAndDelete(
        {
          _id: productId,
        },
        (err, doc) => {
          if (err) {
            console.log(err);
            return res.status(500).json({
              error: "Не удалось удалить товар",
            });
          }
          if (!doc) {
            return res.status(404).json({
              error: "Товар не найден",
            });
          }
          res.json({
            success: true,
          });
        }
      );
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: "Не удалось получить товары",
      });
    }
  },

  create: async (req, res) => {
    try {
      const { title, price, inCart, inFavorite, productImage } = req.body;

      const doc = await ProductModel.create({
        title: title,
        price: price,
        productImage: productImage,
        inCart: inCart,
        inFavorite: inFavorite,
      });

      const product = await doc.save();
      res.json(product);
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: "Не удалось создать товар",
      });
    }
  },
};
