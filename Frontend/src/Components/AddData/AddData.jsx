import { useState } from "react"
import './AddData.css'

function AddData(){
   const[customer,setCustomer]=useState({
    id:"",
    name:"",
    phone:""
})
function handleChange(e){
    setCustomer({
        ...customer,
        [e.target.name]:e.target.value
})
}
 async function handleSubmit(e) {
    e.preventDefault();
    const customerData={
        id:Number(customer.id),
        name:customer.name,
        phone:customer.phone
    }
    try{
     const res= await fetch("https://customer-crud-app-backend.onrender.com/add",{
        method:"POST",
        headers:{
        "Content-Type":"application/json",
        },
        body: JSON.stringify(customerData)
     });
     const data= await res.text();
     alert(data);
      setCustomer(
        {
            id:"",
            name:'',
            phone:''
        }
    )

    }
    catch(err){
        console.log(err)
    }
    }
    return(
        <>
        <div className="container">
        <h2> Add Customer Details </h2>
        <form method="POST" onSubmit={handleSubmit} >
        <label>Id: </label>
        <input  className="inputfield" type="number" name="id" value={customer.id} placeholder="Enter id" onChange={handleChange}/><br/><br/>
        <label>Name: </label>
             <input  className="inputfield"  type="text" name="name" value={customer.name} placeholder="Enter name" onChange={handleChange}/><br/><br/>
             <label>Phone: </label>
                  <input  className="inputfield"  type="text" name="phone" value={customer.phone} placeholder="Enter phone number" onChange={handleChange}/><br/><br/>
        <button className="btn"type="submit">Submit</button>
        </form>
        </div>
        </>
    )

}
export default AddData
