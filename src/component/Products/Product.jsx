import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styles from './Product.module.css'
import { Link } from 'react-router-dom';

function Product() {

  let [products, setProducts]=useState([]);
  let [search,setSearch]=useState('');
  let getProducts = async()=>{
    let {data} = await axios.get("https://fakestoreapi.com/products");
   setProducts(data);
  }

  useEffect( ()=>{

    getProducts();

  },[])

  return (
    <div className={styles.products}>
<h2>All Products</h2>

<h3 className={styles.h3}>Search By Product Name : </h3>
<input type="search" name='pname' value={search} onChange={(e)=>{setSearch(e.target.value)} }/>

<div className='d-flex flex-wrap my-5 '>

  {products.filter((product)=>{

   if(search==""){
return product;
   }
   else if(product.title.toLowerCase().includes(search.toLocaleLowerCase())){
return product;
   }
  }).map( (product)=> 

  <div className='col-lg-4 mt-5'>

<div className={`product card d-flex flex-column align-items-center justify-content-center mx-3 ${styles.myCard}`}>

  { <img src={product.image} style={{height:'200px'}} alt={product.title}/> }
  <div className={`card-body ${styles.myCardBody}`}>
  <h3 className={styles.cardTitle}>{product.title}</h3>
  <p>{product.price}$</p>
  <Link to={`/product/${product.id}`} className='btn btn-dark'>Details</Link>
  </div>

</div>
</div>
  )}

</div>

    </div>
  )
}

export default Product