const mongoose = require('mongoose');

const category = mongoose.model(
    "Category",
    mongoose.Schema(
        {
            categoryName:{
                type: String,
                required: true,
                unique: true,
            },
            categoryNameGujarati:{
                type: String,
                required: true,
            },
        }
    )
)

module.exports = category;