import React, { useEffect, useState } from 'react'
import { useParams ,useNavigate} from 'react-router-dom' 
import axios from 'axios';
const Edit = () => {
    const {id}=useParams();
    const navigate=useNavigate();
    //console.log(id);
    const[product,setProduct]=useState({
        name:"",
        price:"",
        company:""
    })
 useEffect(()=>{
    axios.get(`http://localhost:8888/product/${id}`).then((res)=>{
        setProduct(res.data)
    })

 },[])

 const inputChangeHandler=(event)=>{
    setProduct({...product,[event.target.name]:event.target.value})
}
 const editProduct=(event)=>{
    event.preventDefault();
    axios.put(`http://localhost:8888/product/${id}`,product).then(()=>{
        window.alert("Product edited successfully");
        navigate("/dashboard");
    })
}

 const {name,price,company}=product;
  return (
    <div>
      <h2>This is Edit Component</h2>
      <form  onSubmit={editProduct} style={{width:"400px",margin:"auto"}}>
        {/* <div className='form-group'>
        <label className='form-label'>Enter Product Id</label>
        <input type="text" name="id" className='form-control' onChange={inputChangeHandler} value={id}/>
        </div> */}

        <div className='form-group'>
        <label className='form-label'>Enter Product Name</label>
        <input type="text" name="name" className='form-control' onChange={inputChangeHandler} value={name}  />
        </div>

        <div className='form-group'>
        <label className='form-label'>Enter Product Price</label>
        <input type="text" name="price" className='form-control' onChange={inputChangeHandler} value={price}/>
        </div>

        <div className='form-group'>
        <label className='form-label'>Enter Product Company</label>
        <input type="text" name="company" className='form-control' onChange={inputChangeHandler} value={company}/>
        </div>

        <button type="submit" className='btn btn-success mt-2'>Submit</button>
      </form>
    </div>
  )
}

export default Edit
