import Img from './Img'
import './components.css'
import { CircularProgressbar , buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

function Card({result, mediaType}) {
  const navigate = useNavigate();

  const {id, title, poster_path, release_date, vote_average, first_air_date} = result || {};

  const styles = useMemo(() => buildStyles({
    backgroundColor: '#fff',
    textColor: "#000",
    pathColor:  `${vote_average > 8.5 ? "#74bd5d" : vote_average < 3.0 ? "#FF3B28" : "#f7ad19"}`,
    trailColor: "transparent",
    textSize:'28px',
  }), [vote_average])

  return (
    <div className='card' onClick={()=> navigate(`/Details/${mediaType}/${id}`)}>
      <div className='card_img'>
        <Img url={poster_path || 'placeholder.jpg'}/>
        <div className='card_rating' style={{ position: 'absolute', bottom: '-1rem', left: '0.5rem', fontWeight:'800',fontSize:'1.5rem'}}>
          <CircularProgressbar
            maxValue={10} 
            value={vote_average} 
            background
            backgroundPadding={6}
            styles={styles}
            text={`${(vote_average).toFixed(1)}`}
          />
        </div>
      </div>
      <div className='card_content'>
        <p>{title}</p>
        <p className='date'>{new Date(release_date || first_air_date).toLocaleDateString()}</p>
      </div>
    </div>
  );
}

export default Card;
