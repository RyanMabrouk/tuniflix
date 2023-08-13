import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from 'react-redux'
import { useParams } from "react-router-dom"
import { MultiSelect } from "react-multi-select-component";

import Card from "../../components/Card"
import { CardSkeleton } from "../../components/skeleton.js";
import fetchData from '../../hooks/FetchData'
import '../home/home.css'
import './explore.css';


function Explore(){
    const {mediaType} = useParams()
    const [pageNum, setPageNum] = useState(1)
    const [filter, setFilter] = useState("vote_average.desc")
    const [selected, setSelected] = useState([]);
    const {data, loading} = fetchData(`/discover/${mediaType}?page=${pageNum}&sort_by=${filter}&with_genres=${selected.reduce((x,y)=>(x + `,${y.value}`),"")}`)
    const [items, setItems] = useState([])
    const [hasMore, setHasMore] = useState(true)
    const options = useSelector((state) => state.home.genres)


    useEffect(() => {
        if (!loading && data) {
            setItems((prevItems) => [...prevItems, ...data?.results])
        }
      }, [data, loading])

      const fetchmore =() =>{
        setPageNum((prev) => prev + 1)
        if (data && data.results.length < data.total_results) {
            setHasMore(true)
        } else {
            setHasMore(false)
        }
    }
      
      
      useEffect(()=>{
        setItems([])
        setPageNum(1)
    },[mediaType,filter,selected])
    
    return (
        <div>
                <div className="explore_heading">{`explore ${mediaType}`}</div>
            <div style={{width:'90%',display:'flex','justifyContent':'space-between', margin:'1rem auto'}}>
                <div className="explore_selector">
                    <MultiSelect
                        style={{
                        border:"none", 
                        borderRadius:"10px",
                        padding:"1rem",
                        backgroundColor: "#000",
                        fontWeight: 700,
                        color: "#5c5c5c",
                        cursor: "pointer",
                        fontFamily: "Roboto , sans-serif",
                    }}
                        hasSelectAll={false}
                        options={options}
                        value={selected}
                        onChange={setSelected}
                        labelledBy="Select gener"
                        className="selector"
                    />
                    <select name="filter" id="filter" style={{padding:'0.6rem'}} onChange={(e)=>(setFilter(e.target.value))}>
                        <option value="vote_average.desc">Rating Descending</option>
                        <option value="vote_average.asc">Rating Ascending</option>
                        <option value="popularity.desc">Popularity Descending</option>
                        <option value="popularity.asc">Popularity Ascending</option>
                        <option value="primary_release_date.desc">Release Date Descending</option>
                        <option value="primary_release_date.asc">Release Date Ascending</option>
                        <option value="original_title.asc">Title (A-Z)</option>
                    </select>
                </div>
            </div>

            <InfiniteScroll
                dataLength={items.length}
                next={fetchmore}
                hasMore={hasMore}
                loader={<CardSkeleton/>}
                className='colwise'
                >
                {items?.map((result, i) => {  return <Card result={result} mediaType={mediaType} key={i}/>})} 
            </InfiniteScroll>
                    
            {(!loading && items.length < 0)&& <div className="resultNotFound">sorry results not found</div>}
        </div>
        )
}
export default Explore