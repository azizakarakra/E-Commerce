import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styles from './Cats.module.css'

function Cats() {

    let [cats,setCats] = useState([]);

    let getCats = async ()=>{
        let {data} = await axios.get("https://fakestoreapi.com/products/categories");
       setCats(data);
    }
    useEffect( ()=>{

        getCats();

    },[] )

  return (
    <div className={styles.cats}>
    
<h2>All Categories</h2>

<div className='d-flex justify-content-between my-5'>
{cats.map((cat,i)=>
<div className='cat' key={i}> 
<Link to={`/category/${cat}`} className='btn btn-dark'>{cat}</Link>
</div>
)}
</div>

    </div>
  )
}

export default Cats