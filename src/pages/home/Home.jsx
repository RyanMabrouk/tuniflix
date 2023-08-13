import React from "react";
import './home.css'
import Banner from './Banner'
import Trending from './Trending'
import Popular from './Popular'
import TopRated from './TopRated'

function Home(){
    return(
        <>
        <Banner />
        <Trending/>
        <Popular />
        <TopRated />
        </>
    )
}
export default Home