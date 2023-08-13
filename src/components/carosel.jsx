import Card from './Card'
import React from "react"
import { CardSkeleton } from "./skeleton"

function Carosel({data,loading, mediaType}){
    return (
        <div className={`cards`}>
            {!loading 
            ? (data?.results.map((result, i) => <Card result={result} mediaType={mediaType} key={i}/>)) 
            :  ([1,2,3,4,5,6].map((_, i) => (<CardSkeleton key={i} />)))
            }
        </div>
    )
}
export default Carosel