import {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import axios from "axios"



const ProductList = (props) => {
    const {product, setProduct} = props;
        useEffect(() => {
            axios.get("http://localhost:8000/api/products")
                .then((res) => {
                    console.log(res.data);
                    setProduct(res.data);
                })
                .catch((err)=>{
                    console.log(product, err)
                })
        }, [])
        
        const deleteProduct = (productId) => {
            axios.delete('http://localhost:8000/api/products/' + productId)
                .then(res =>{
                        console.log(res.data)
                        const newList = product.filter((item, index) => item._id !== productId)
                        setProduct(newList)
                    })
                .catch(err => console.log("delete promise ain't workin", err))
            }

        return (
         
            <div>
                 <h2>All Products:</h2>
                {
                    product.map((product, _id)=>{
                        return (<div key={_id}>
                            {product.title},
                            {product.price}, 
                            {product.descript}
                            <Link to={`/products/${product._id}`}>{product.title} Info</Link>
                            <Link to={`/products/edit/` + product._id}> Edit </Link>
                            <button class="btn btn-primary" onClick={() =>{deleteProduct(product._id)}}> Delete </button>
                        </div>
                            )})
                }
            </div>
        )
    }
    
    export default ProductList;