import { useState } from "react"
import './Home.css'
import FetchData from "../FetchData/FetchData"
import AddData from "../AddData/AddData"

function  Home(){
   const[activeState,setActiveState]=useState(null)
    
     return (
       <>
       <div className="container">
       <h1>Customer Data</h1>
       <button className="btn" onClick={()=> setActiveState(activeState==='fetch'?null:'fetch')}>Fetch Data</button>&nbsp;
       <button className="btn" onClick={()=>setActiveState(activeState==='add'?null:'add')} > Add Data</button>
       {activeState==='fetch'&&<FetchData/>}
       {activeState==='add'&&<AddData/>}
       
       </div>
       </>
    )
}
export default Home