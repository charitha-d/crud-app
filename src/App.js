import Form from './Form'
import Table from './Table'
import { getData ,delData, postData, putData} from './api';
import {useEffect,useState} from 'react'



function App(){
    const [products,setProducts]=useState([])
    const [addpro,setAddpro]=useState(false)
    const [edit,setEdit]=useState(false)
    const [initalformData,setForm]=useState({
      name:"",
      price:""
})
  useEffect(()=>{
      getProducts()
  },[])

  let getProducts=async()=>{
    let res=await getData()
    setProducts(res.data)
  }
  let delProducts=async(id)=>{
      await delData(id)
      getProducts()
         
  }
  let addproduct=async(product)=>{
    let data={
     name:product.name,
     price:product.price
    }
    if(edit)
      await putData(product.id,data)
    
    else
       await postData(data)
    
       getProducts()
       setAddpro(false)
  }
  let Editproduct=async(data)=>{
    setForm(data)
    
    setAddpro(true)
    setEdit(true)
}
  
  let showForm=()=>{
    setAddpro(true)
    setForm({ name:"",
      price:" "})
  }
  let closeForm=()=>{
    setAddpro(false)
  }

  return (
    <div className="wrapper m-5 w-50">
       <h2 className='text-primary'>CRUD OPERATIONS</h2>
       <button className="btn btn-primary" onClick={()=>{showForm()}}>Add Products</button>
       <Table products={products} delete={delProducts} edit={Editproduct}></Table>
       
       { addpro && <Form close={closeForm} data={initalformData} add={addproduct}></Form>}
    </div>
  )
}
export default App;