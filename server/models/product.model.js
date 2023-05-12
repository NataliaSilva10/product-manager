const mongoose = require('mongoose');

 const ProductSchema = new mongoose.Schema({

//start objects
    title: {
    type: String,
    required: [true, "Title is required"],
    minlength: [2, "Title must be at least 2 characters long"],
    maxlength:[20, "Title cannot be more than 20 characters long"]
    },
    price: {
    type: Number,
    required:[true, 'price is required']
},
    descript:{
    type:String,
    required: [true,"Description is required"],
    minlength: [3,"Description must be at least 3 characters"]
}
}, {timestamps: true});

//colection name
const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;