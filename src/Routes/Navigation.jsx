import {Link, Route, Routes} from  'react-router-dom';
import Popular from './popular/Popular';
import Recommendation from './recommendation/Recommendation';
import SignUpLogin from '../components/SignUp';

const Navigation = ({itsClicked}) => {
  
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary mt-1">
  <div className="container-fluid">
    <img className="navbar-brand logo" alt='logo' src='/images/logo.png' />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <Link to='/' className="nav-link active" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/popular' className="nav-link active" aria-current="page" href="#">Popular</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            BookType
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to='/comedy'>Comedy</Link></li>
            <li><Link className="dropdown-item" to='/fairy-tales'>Fairy Tales</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" to='Action'>Action</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/recommendation' >Recommendation</Link>
        </li>
      </ul>
      <div>
        <button onClick={itsClicked} className='btn btn-outline-info'><Link style={{textDecoration: 'none'}} to='/SignUp' >SignUp</Link></button>
      </div>
    </div>
  </div>
</nav>

<Routes>
  <Route path='/popular' element={<Popular />} />
  <Route path='/recommendation' element={<Recommendation />} />
  <Route path='/sign-up' element={<SignUpLogin />} />
</Routes>
</div>
  )
}

export default Navigation