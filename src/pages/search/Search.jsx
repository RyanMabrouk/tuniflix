import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import fetchData from '../../hooks/FetchData'
import { useParams } from "react-router-dom"
import Card from "../../components/Card"
import { CardSkeleton } from "../../components/skeleton";
import '../home/home.css'
import './search.css'

function Search(){
    const {query} = useParams()
    const [pageNum, setPageNum] = useState(1)
    const [endpoint, setEndpoint] = useState('movie')
    const {data, loading} = fetchData(`/search/${endpoint}?query=${query}&page=${pageNum}`)
    const [items, setItems] = useState([])
    const [hasMore, setHasMore] = useState(true)

    useEffect(() => {
      if (!loading && data) {
        setItems((prevItems) => [...prevItems, ...data.results])
      }
    }, [data, loading])

    useEffect(()=>{
        setItems([])
        setPageNum(1)
    },[query,endpoint])

    const fetchmore =() =>{
        setPageNum((prev) => prev + 1)
        if (data && data.results.length < data.total_results) {
            setHasMore(true)
        } else {
            setHasMore(false)
        }
    }
    
    return (
            <div>
                <div className="search_header">
                    <h5>{`search ${items.length > 1 ? "results" : 'result'} of '${query}'`}</h5>
                    <div className="switchTabs">
                        <button style={{"background":`${endpoint === 'tv' ? '#bdbdbd' : '#fe5555'}`}} onClick={()=>(setEndpoint('movie'))}>movie</button>
                        <button style={{"background":`${endpoint === 'tv' ? '#fe5555' : '#bdbdbd'}`}} onClick={()=>(setEndpoint('tv'))}>tv</button>
                    </div>
                </div>
               {items.length > 0 
                ?   <div>
                        <InfiniteScroll
                            dataLength={items.length}
                            next={fetchmore}
                            hasMore={hasMore}
                            loader={hasMore && <CardSkeleton/>}
                            className='colwise'
                        >
                        {items?.map((result, i) => <Card result={result} mediaType={endpoint} key={i}/>)} 
                        </InfiniteScroll>
                    </div>
                : !loading && (<span className="resultNotFound">Sorry, Results not found!</span>)
                
                }
            </div>
        )
}
export default Search