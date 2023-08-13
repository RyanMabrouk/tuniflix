import logo from '../assets/logo.png'
import './components.css'
import {useNavigate} from 'react-router-dom'

function Header(){

    const navigate = useNavigate()
    return(
        <div className="header">
            <div className='wrapper'>
                <div className="logo" style={{cursor:'pointer'}}>
                    <img src={logo} onClick={()=>(navigate('/'))} alt="" />
                </div>
                <nav >
                   <a href="/explore/movie" onClick={()=>(navigate(`explore/movie`))}>movie</a>
                   <a href="/explore/tv" onClick={()=>(navigate('/explore/tv'))}>tv</a>
                </nav>
            </div>
        </div>
    )
}

export default Header