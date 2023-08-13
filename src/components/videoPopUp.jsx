import '../pages/details/Details'
import YouTube from 'react-youtube';
function VideoPopUp({handleToggle,videoId}){
    return(
        <div className="videoPopUpBtn">
            <div className="videoMask" onClick={()=>(handleToggle())}></div>
            <div className="player"><p onClick={()=>(handleToggle())} style={{padding:'0.4rem 0', cursor:'pointer'}}>close</p><YouTube videoId={videoId}/></div>
        </div> 
    )
}
export default VideoPopUp