import { useState } from "react";

function Form(props){
    const [product,setProduct]=useState(props.data)
    const [submitted,setSubmitted]=useState(false)

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
                     {
                    submitted && product.name==="" && <span className="text-danger">Product tag required</span>
                   }
                </div>
                <div className="form-group">
                   <label>Price:</label>
                   <input className='form-control mt-2' value={product.price} type="number" name="price" placeholder="price" onChange={changeformData}/>
                   {
                    submitted && product.price==="" && <span className="text-danger">Product price required</span>
                   }
                
                
                </div>
                <button className="btn btn-primary float-end" 
                onClick={(e)=>{
                    e.preventDefault();
                    setSubmitted(true)
                    if(!!product.name && !!product.price)
                           props.add(product)
                   
                    
                    }}>Send</button>
                <button className="btn btn-danger float-end " onClick={(e)=>{
                    e.preventDefault(); 
                    props.close()} }id="cancel">
                        Cancel</button>
            </form>
        </div>
    )
}

export default Form