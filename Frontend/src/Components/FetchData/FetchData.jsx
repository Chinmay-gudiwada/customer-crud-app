import { useEffect, useState } from "react"
import './FetchData.css'
function FetchData(){
    const[data,setData]=useState([])
    const[edit,setEdit]=useState(null)
        useEffect(()=>{
            fetch("http://localhost:8082/customer")
            .then(res=>res.json())
            .then(res=>setData(res))
    },[])
    async function handleUpdate(item) 
    {
        const updatedcustomer={
         id:item.id,
         name:item.name,
         phone:item.phone
        }

        try{
            await fetch(`http://localhost:8082/update`,{
                method:"PUT",
                headers:{
                    "Content-Type":'application/json'
                },
                body:JSON.stringify(updatedcustomer)
            })
           setEdit(null)
        }catch(err){
            console.log(err)
        }
        
    }
     async function handleDelete(id){
        try{
     await fetch(`http://localhost:8082/delete/${id}`,{
        method:"DELETE"
     });
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
        <h2>Data</h2>
    
            <div>
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
                    {data.filter(item=>item.id!==0).map(item=>(
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
                                onChange={e=>setData(data.map(c=>c.id===item.id?{...c,phone:e.target.value}:c))
                            }/>):item.phone}</td>
                        <td>
                            {edit===item.id?(
                            <button className="btnsave" onClick={()=>handleUpdate(item)}>Save</button>):(
                            <button className="btnupdate" onClick={()=>setEdit(item.id)}>Update</button> )}
                        </td>
                        <td>
                           <button className="btndelete" onClick={()=>handleDelete(item.id)}>Delete</button> 
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