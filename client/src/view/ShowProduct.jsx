import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const ShowProduct = (props) => {
    // //// FIELDS ///////////////////////////////////////////////////
    const productId = props.match.params.productId;
    
    const [product, setProduct] = useState({});

    // //// API GET ONE PRODUCT //////////////////////////////////////
    const getProductById = async () =>{
        try {
            const response = await axios.get(`http://localhost:8000/api/product/${productId}`)
            console.log("Response: ",response);
            setProduct(response.data.product)
        } catch (error) {
            console.log("Error", {error});
        }
    } 
    useEffect(() => {
      getProductById();
    }, [])
    return(
        <div>
            <h1>{product.title}</h1>
            <h3>Price:{product.price}</h3>
            <h3>Description:{product.description}</h3>
            <hr />
            <Link to={`/${product._id}/edit`}>
                <button className='btn btn-success'>Edit</button>
            </Link>
        </div>
    );
}
export default ShowProduct;