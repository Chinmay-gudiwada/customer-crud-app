import { useState } from "react"
import './AddData.css'
import axios from "axios";


function AddData(){

   const [customer,setCustomer] = useState({
      id:"",
      name:"",
      phone:""
   });
   

   function handleChange(e){
      setCustomer({
         ...customer,
         [e.target.name]: e.target.value
      });
   }

   async function handleSubmit(e){
      e.preventDefault();

      if(
         !customer.id ||
         !customer.name.trim() ||
         !customer.phone.trim()
      ){
         alert("Please enter all required fields");
         return;
      }

      if(!/^[A-Za-z ]+$/.test(customer.name)){
         alert("Please enter a valid name");
         return;
      }

      if(!/^\d{10}$/.test(customer.phone)){
         alert("Please enter a valid 10-digit phone number");
         return;
      }

      try{
         await axios.post(
            "https://customer-crud-app-backend.onrender.com/add",
            customer
         );

         alert("Customer added successfully...");

         setCustomer({
            id:"",
            name:"",
            phone:""
         });

      }catch(err){
         console.log(err);
      }
   }
    return(
        <>
        <div className="container">
        <h2> Add Customer Details </h2>
        <form onSubmit={handleSubmit }>
        <label>Id: </label>
        <input  className="inputfield" type="number" name="id" value={customer.id} placeholder="Enter id" onChange={handleChange}/><br/><br/>
        <label>Name: </label>
             <input  className="inputfield"  type="text" name="name" value={customer.name} placeholder="Enter name"
              onChange={handleChange}/><br/><br/>
             <label>Phone: </label>
                  <input  className="inputfield"  type="text" name="phone" 
                  value={customer.phone} placeholder="Enter phone number" onChange={(e)=>{setCustomer({
        ...customer,
        phone:e.target.value.replace(/\D/g,"")
})}}/><br/><br/>
        <button className="btn"type="submit">Submit</button>
        </form>
        </div>
        </>
    )

}
export default AddData
