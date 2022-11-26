import PostModel from '../models/Post.model.js'

export default {
  getAll: async (req, res) => {
    try {
      const posts = await PostModel.find();
      res.json(posts);
    } catch (err) {
      res.status(500).json({
        error: "Не удалось получить статьи",
      });
    }
  },

  getOne: async (req, res) => {
    try {
      const postId = req.params.id;

      PostModel.findOneAndUpdate(
        {
          _id: postId,
        },
        {
          returnDocument: "after",
        },
        (err, doc) => {
          if (err) {
            console.log(err);
            return res.status(500).json({
              error: "Не удалось вернуть статью",
            });
          }
          if (!doc) {
            return res.status(404).json({
              error: "Статья не найдена",
            });
          }
          res.json(doc);
        }
      );
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: "Не удалось получить статьи",
      });
    }
  },

  remove: async (req, res) => {
    try {
      const postId = req.params.id;

      PostModel.findByIdAndDelete(
        {
          _id: postId,
        },
        (err, doc) => {
          if (err) {
            console.log(err);
            return res.status(500).json({
              error: "Не удалось удалить статью",
            });
          }
          if (!doc) {
            return res.status(404).json({
              error: "Статья не найдена",
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
        error: "Не удалось получить статьи",
      });
    }
  },

  create: async (req, res) => {
    try {
      const { title, text, ImageUrl } = req.body;

      const doc = await PostModel.create({
        title: title,
        text: text,
        ImageUrl: ImageUrl,
      });

      const post = await doc.save();
      res.json(post);
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: "Не удалось создать статью",
      });
    }
  },

  update: async (req, res) => {
    try {
      const postId = req.params.id;
      const { title, text, imageUrl } = req.body;

      PostModel.findByIdAndUpdate(
        {
          _id: postId,
        },
        {
          title: title,
          text: text,
          imageUrl: imageUrl,
        }
      );
      res.json({
        success: true,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: "Не удалось обновить статью",
      });
    }
  },
};
