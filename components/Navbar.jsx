import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";

function Navbar(props){
    const users = ["Aditya", "Amit", "Aryan", "Meghana", "Mugdha","Madhura","Roma"];
    let [search,setSearch]=useState("");
    let [Arr,setArr]=useState([]);

    useEffect(()=>{
        if(search===""){
            setArr([]);
        }
        else{
            setArr(users.filter((ele,i)=>ele.toLowerCase().includes(search.toLowerCase())));
        }
    },[search]);

    return <div className="navbar">
            <h1 className="logo">{props.name}</h1>
            <div className="nav-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
                
            </div>
            <div className="search-container">
                <input 
                type="text"
                className="search-box"
                placeholder="Enter username"
                onChange={(event)=>setSearch(event.target.value)}
                value={search}/>

                <ul className="dropdown">
                    {Arr.map((element,index)=><li key={index} className="dropdown-item">{element}</li>)}
                </ul>
            </div>
            
    </div>
}
export default Navbar;