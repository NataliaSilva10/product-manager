const Product = require('../models/product.model.js');  

module.exports ={
    //CREATE
    createProduct: (req, res) => {
        // console.log(req.body)
        Product.create(req.body)
            .then(newProduct => res.json(newProduct))
            .catch(err => res.json(err));
    },

    // module.exports.createProduct = (req, res) => {

    //    Product.create(req.body) 
    //       .then(newProduct => res.json(newProduct))
    //       .catch(err => res.json(err));

    //READ
  getAllProducts:(req, res) =>{
    Product.find()
    .then(allProducts => res.json(allProducts))
    .catch(err => res.json(err));
  },

  //READ ONE
    getOneProduct : (req, res) => {
    Product.findOne({_id:req.params.id})
        .then(oneProduct => res.json(oneProduct))
        .catch(err => res.json(err));
    },

    //UPDATE
    // updateProduct: (req, res) =>{
    //   Product.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
    //   .then(updateProduct => res.json (updateProduct))
    //   .catch(err=> res.json(err));

    // },

    updateProduct: (req, res) => {
      Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
          .then(updatedShow => res.json(updatedShow))
          .catch(err => res.json(err));
  },  

    // DELETE
     deleteProduct: (req, res)=>{
      Product.findByIdAndDelete(req.params.id)
      .then(result => res.json(result))
      .catch(err => res.json(err));

    }
}