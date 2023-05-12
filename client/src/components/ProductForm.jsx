import React, {useState} from 'react'
import axios from 'axios'


const ProductForm = (props) =>{
	const {product, setProduct} = props;
	const [title, setTitle] = useState("");
	const [price, setPrice] = useState("");
	const [descript, setDescript] = useState("");

	const productAddForm = (e) => {
		e.preventDefault();
		axios.post("http://localhost:8000/api/products", {
			title ,
			price ,
			descript ,
		})
		.then ( res => {
			console.log(res);
			console.log(res.data);
			setProduct([...product, res.data]);
		})
		.catch (err => console.log({message: "The error is in the form.", error: err}))
	};

		return (
			<div className='col-5 mx-auto'>
			  <form  onSubmit={productAddForm}>
			   <div className='row form-group'>
				<label className='col form-label' htmlFor="title">Title:</label>
				<input className='col form-control border border-dark' type="text" onChange={ (e) => setTitle(e.target.value)} />
				</div>

				<div className='row form-group'>
				<label  className='col form-label' htmlFor="price">Price:</label>
				<input className='col form-control border border-dark'type="number" onChange={ (e) => setPrice(e.target.value)} />
				</div>

				<div className='row form-group'>
				<label  className='col form-label' htmlFor="description">Description:</label>
				<input className='col form-control border border-dark' type="text" onChange={ (e) => setDescript(e.target.value)} />
				<input class='btn btn-success' type="submit" value="Add Product" />
			</div>
			</form>
			</div>
		)


}
export default ProductForm