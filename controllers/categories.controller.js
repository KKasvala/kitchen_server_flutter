const categoriesService = require("../services/categories.service");

//create category
exports.create = (req, res, next) => {
  var model = {
    categoryName: req.body.categoryName,
    categoryNameGujarati: req.body.categoryNameGujarati,
  };

  categoriesService.createCategory(model, (error, results) => {
    if (error) {
      return next(error);
    } else {
      return res.status(200).send({
        message: "Category Created Successfully",
        data: results,
      });
    }
  });
};

//get all categories
exports.findAll = (req, res, next) => {
  var model = {
    categoryName: req.body.categoryName,
    categoryNameGujarati: req.body.categoryNameGujarati,
  };

  categoriesService.getCategories(model, (error, results) => {
    if (error) {
      return next(error);
    } else {
      return res.status(200).send({
        message: "success",
        data: results,
      });
    }
  });
};

//find one category
exports.findOne = (req, res, next) => {
  var model = {
    categoryId: req.params.id,
    categoryNameGujarati: req.body.categoryNameGujarati,
  };

  categoriesService.getCategoryById(model, (error, results) => {
    if (error) {
      return next(error);
    } else {
      return res.status(200).send({
        message: "success",
        data: results,
      });
    }
  });
};

//update category
exports.findOne = (req, res, next) => {
  var model = {
    categoryId: req.params.id,
    categoryName: req.body.categoryName,
    categoryNameGujarati: req.body.categoryNameGujarati,
  };

  categoriesService.updateCategory(model, (error, results) => {
    if (error) {
      return next(error);
    } else {
      return res.status(200).send({
        message: "success",
        data: results,
      });
    }
  });
};
