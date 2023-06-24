import axios from 'axios'
import React ,{useState}from 'react'
import { useNavigate } from 'react-router-dom';

const Add=() =>{
    const navigate=useNavigate();
    const[product,setProduct]=useState(
        {id:"",
    name:"",
    price:"",
    company:""
})
const inputChangeHandler=(event)=>{
    setProduct({...product,[event.target.name]:event.target.value})
}

const addProduct=(event)=>{
    event.preventDefault();
    axios.post("http://localhost:8888/product",product).then(()=>{
        window.alert("Product added successfully");
        navigate("/dashboard");
    })
}
           
    const {id,name,price,company}=product;
  return (
    <div>
      <h2>Add Component</h2>
      <form  onSubmit={addProduct} style={{width:"400px",margin:"auto"}}>
        <div className='form-group'>
        <label className='form-label'>Enter Product Id</label>
        <input type="text" name="id" className='form-control' onChange={inputChangeHandler} value={id}/>
        </div>

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

export default Add
