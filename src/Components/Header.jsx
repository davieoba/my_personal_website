import { FaBars, FaTimes } from 'react-icons/fa'
import styles from './Header.module.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Header(props) {
    const location = useLocation()
     
    const navigate = useNavigate()
    console.log(location.pathname)

    function handleClick(){
        navigate('/menu')
        console.log('clicked')
    }

    function handleCancel(){
        navigate(-1)
        console.log('clicked')
    }

  return (
    <header>
      <h1>
        <Link to="/">David Bodunrin</Link>
      </h1>

        {location.pathname === '/menu' ? <FaTimes size={24} style={{cursor:'pointer'}} onClick={handleCancel}/> :  <FaBars size={24} style={{cursor:'pointer'}} onClick={handleClick}/>}      
    </header>
  )
}

export default Header
