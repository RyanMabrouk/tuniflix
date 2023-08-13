import FetchData from "../../hooks/FetchData"
import React, {useState } from "react"
import Carosel from "../../components/carosel"
import './home.css'

function Popular(){
    const [endpoint, setendPoint] = useState('movie')
    const { data, loading } = FetchData(`/${endpoint}/popular`)
    return(
        <div className="trending">
            <div className="trending_header">
                <h5>What's Popular</h5>
                <div className="switchTabs">
                    <button style={{"background":`${endpoint === 'tv' ? '#bdbdbd' : '#FF001F'}`}} onClick={()=>(setendPoint('movie'))}>movie</button>
                    <button style={{"background":`${endpoint === 'tv' ? '#FF001F' : '#bdbdbd'}`}} onClick={()=>(setendPoint('tv'))}>tv</button>
                </div>
            </div>
            <Carosel data={data && data} loading={loading} mediaType={'movie'}/>
        </div>
        )
    }
    
export default Popular