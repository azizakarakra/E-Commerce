import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './ProductDetails.module.css'

function ProductDetails() {

    let params = useParams();

    let [product,setProduct] = useState('');

    let getProduct = async ()=>{
        let {data} = await axios.get(`https://fakestoreapi.com/products/${params.id}`);
        setProduct(data);
    }

    useEffect( ()=>{
        getProduct();
    },[])
  return (
    <div>
        <img src={product.image} className={styles.image}/>
        <h2 className={styles.title}>{product.title}</h2>
        <p className={styles.paragraph}>{product.description}</p>
    </div>
  )
}

export default ProductDetails