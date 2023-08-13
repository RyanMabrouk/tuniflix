import React from "react";
import { useNavigate } from 'react-router-dom';

function PageNotFound(){
    const navigate = useNavigate()
    return(
        <div style={{height:'50vh', width:'100%', display:'flex', justifyContent:'center', flexDirection:'column',alignItems:'center'}}>
            <h1 style={{color:'#fff',fontSize:'10vh',fontWeight:'800'}}>404</h1>
             <p style={{color:'#fff',fontSize:'6vh',fontWeight:'800'}}>page not found</p>
             <a href="/" 
             onMouseOver={(event) => (event.target.style.color='#fe5555')} 
             onMouseOut={(event) => (event.target.style.color='#fff')} 
             style={{color:"#fff", textDecoration:'underline',cursor:'pointer'}} 
             onClick={()=>(navigate(`/`))}>back to home</a>
        </div>
    )
}
export default PageNotFound