import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import styles from './CategoryProduct.module.css';

function CategoryProduct() {

    let [catProduct,setCatProduct]=useState([]);
    let params = useParams();
    

    let getProducts = async()=>{

        let {data} = await axios.get(`https://fakestoreapi.com/products/category/${params.name}`)
       setCatProduct(data);
    }

    useEffect(  ()=>{
    getProducts();
    },[])



  return (
     <div className={styles.products}>
<h2 className='my-3'>{params.name} Products</h2>

<div className={`d-flex flex-wrap mb-5`}>

  {catProduct.map( (product,index)=> 

  <div key={index} className={`col-lg-4 mt-2 mb-5 ${styles.myCard}`}>

<div className={`product card d-flex flex-column align-items-center justify-content-center ${styles.Card}`} style={{overflow:'hidden'}}>

  <img src={product.image} className="card-img-top" alt={product.title}/>
  <div className="card-body">
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

export default CategoryProduct