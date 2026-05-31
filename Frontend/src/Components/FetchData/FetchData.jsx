import { useEffect, useState } from "react"
import axios from 'axios';
import './FetchData.css'

function FetchData(){
    const[data,setData]=useState([])
    const[edit,setEdit]=useState(null)
    const[search,setSearch]=useState("")
        useEffect(()=>{
            axios.get("https://customer-crud-app-backend.onrender.com/customer")
            
            .then(res=>{setData(res.data);console.log(res.data)}).catch(err=>console.log(err))
      
    },[])
    async function handleUpdate(item) 
    {
        if(!/^[A-Za-z ]+$/.test(item.name)){
            alert("Please enter name correctly.")
            return
        }
        if(!/^\d{10}$/.test(item.phone)){
            alert("Please enter phone number with only 10 digits.")
            return
        }
    
        try{
            await axios .put(`https://customer-crud-app-backend.onrender.com/update`,item)
            
           setEdit(null)
           alert("Customer updated successfully..")
            console.log("Customer updated successfully..")
        }catch(err){
            console.log(err)
        }
        
       
    }
     async function handleDelete(id){
        try{
     await axios .delete(`https://customer-crud-app-backend.onrender.com/delete/${id}`);
     console.log("Customer deleted ")
      alert("Customer deleted ")
     setData(
        data.filter(item=>item.id!==id)
     )
    }
     catch(err){
        console.log(err)
     }

    }
    
    return (
        <>
        <div className="table-container">
        <h2>Customer List</h2>
        <input type="search" className="search"placeholder="🔍 Search by name"value={search} onChange={(e)=>setSearch(e.target.value)}/><br/>
            <div>
                <br/>
                <table className="table">
                   <thead >
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.filter(item=>item.id!==0).filter(item=>item.name.toLowerCase().includes(search.toLowerCase())).map(item=>(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>
                            {
                                edit===item.id?(<input 
                                    type="text"
                                    value={item.name}
                                    onChange={e=>setData(data.map(c=>c.id===item.id?{...c,name:e.target.value}:c))}/>
                                ):
                            item.name
}</td>
                        <td>{
                            edit===item.id?(
                                <input 
                                type="text"
                                maxLength={10}
                                value={item.phone}
                                onChange={e=>setData(data.map(c=>c.id===item.id?{...c,phone:e.target.value.replace(/\D/g,"")}:c))
                            }/>):item.phone}</td>
                        <td>
                            {edit===item.id?(
                            <button className="btnsave" onClick={()=>handleUpdate(item)}>Save</button>):(
                            <button className="btnupdate" onClick={()=>setEdit(item.id)}>Update</button> )}
                        </td>
                        <td>
                           <button className="btndelete" onClick={()=>
                            {
                            if(window.confirm("Are you sure you want to delete customer ?"))
                            handleDelete(item.id)}}>Delete</button> 
                        </td>
                    </tr>
                    ))}
                    </tbody>
                </table>
                
            </div>
       
        </div>
        </>
    )

}
export default FetchData
