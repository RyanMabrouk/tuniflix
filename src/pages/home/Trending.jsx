import FetchData from "../../hooks/FetchData"
import React, {useState } from "react"
import Carosel from "../../components/carosel"

function Trending(){
    
    const [endpoint, setendPoint] = useState('day')

    const { data, loading } = FetchData(`/trending/movie/${endpoint}`)
    return(

        <div className="trending">
            <div className="trending_header">
                <h5>Trending</h5>
                <div className="switchTabs">
                    <button style={{"background":`${endpoint === 'week' ? '#bdbdbd' : '#FF001F'}`}} onClick={()=>(setendPoint('day'))}>day</button>
                    <button style={{"background":`${endpoint === 'week' ? '#FF001F' : '#bdbdbd'}`}} onClick={()=>(setendPoint('week'))}>week</button>
                </div>
            </div>
            <Carosel data={data && data} loading={loading} mediaType={'movie'}/>
        </div>
        )
    }
    
export default Trending