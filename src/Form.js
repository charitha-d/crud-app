import { useState } from "react";

function Form(props){
    const [product,setProduct]=useState(props.data)
    let changeformData=(event)=>{
          const {name,value}=event.target
        setProduct({...product,[name]:value})
    }
    return(
        <div className="form-overlay">
            <form>
                <div className="form-group">
                   <label>Name:</label>
                   <input className='form-control mt-2' value={product.name} type="text" name="name" placeholder="product name"
                   onChange={changeformData}/>
                </div>
                <div className="form-group">
                   <label>Price:</label>
                   <input className='form-control mt-2' value={product.price} type="number" name="price" placeholder="price" onChange={changeformData}/>
                </div>
                <button className="btn btn-primary float-end" 
                onClick={(e)=>{
                    e.preventDefault();
                    props.add(product)}}>Send</button>
                <button className="btn btn-danger float-end " onClick={(e)=>{
                    e.preventDefault(); 
                    props.close()} }id="cancel">
                        Cancel</button>
            </form>
        </div>
    )
}

export default Form