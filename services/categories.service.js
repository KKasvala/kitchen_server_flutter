const { response } = require('express');
const { category } = require('../models/category.model');



// Create and Save a new Category
async function createCategory(params, callback) {
    if (!params.categoryName) {
       return callback(
        { 
            message: "Category name can not be empty!" 
        },
        ""
        );
    }

    const model = new category(params);
    model
        .save()
        .then((response) => {
            return callback(null, response);
        })
        .catch((error) => {
            return callback(error);
        });
}

// Retrieve all Categories from the database.
async function getCategories(params, callback) {
    const categoryName = params.categoryName;
    var condition = categoryName
        ? { categoryName: { $regex: new RegExp(categoryName), $options: "i" } }
        : {};

    category
    .find(condition, "categoryName categoryNameGujarati")
    .then((response) => {
        return callback(null, response);
    })
    .catch((error) => {
        return callback(error);
    });
}

// Find a single Category with an id
async function getCategoryById(params, callback) {
    const categoryId = params.categoryId;

    category
    .findById(categoryId)
    .then((response) => {
        if (!response)
        callback("Category not found with id " + categoryId);
        else callback(null, response);
    })
    .catch((error) => {
        return callback(error);
    });
}


// Update a Category by the id in the request
async function updateCategory(params, callback) {
    const categoryId = params.categoryId;

    category
    .findByIdAndUpdate(categoryId, params, {userFindAndModify: false})
    .then((response) => {
        if (!response)
        callback("Category not found with id " + categoryId);
        else callback(null, response);
    })
    .catch((error) => {
        return callback(error);
    });
}


// Delete a Category with the specified id in the request
async function deleteCategory(params, callback) {
    const categoryId = params.categoryId;

    category
    .findByIdAndDelete(categoryId)
    .then((response) => {
        if (!response)
        callback("Category not found with id " + categoryId);
        else callback(null, response);
    })
    .catch((error) => {
        return callback(error);
    });
}

module.exports = {
    createCategory,
    getCategories,
    getCategoryById,
    updateCategory,
    deleteCategory
}