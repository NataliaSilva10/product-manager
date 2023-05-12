const ProductController =require ('../controller/product.controller');
module.exports = (app) => {
    app.get('/api/products', ProductController.getAllProducts); 
    app.post('/api/products', ProductController.createProduct);
    app.get('/api/products/:id', ProductController.getOneProduct);
    //changes all values in the db to match the req.body
    //update all information
    //app.put('/api/products/:id', ProductController.updateProduct);

    //change only the fields pass 
    app.patch('/api/products/:id' , ProductController.updateProduct);
    app.delete('/api/products/:id', ProductController.deleteProduct);
}