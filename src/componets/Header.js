import { React } from 'react'
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom'
import logo from '../images/logo.svg'

function Header(props) {
  const navigate = useNavigate()
  function signOut() {
    localStorage.removeItem('token');
    navigate("/sign-in", { replace: true })
  }

  return (
    <>
      <Routes>
        <Route path="/" element={
          <header className="header">
            <div className="header__container">
              <img src={logo} alt="Логотип" className="header__logo" />
              <div className='header__box' >
                <div className='header__email'>{props.userEmail}</div>
                <button type='button' onClick={signOut} className='header__name header__name_moddif'>Выйти</button>
              </div>
            </div>
          </header>} />
        <Route path="/sign-in" element={<header className="header">
          <div className="header__container">
            <img src={logo} alt="Логотип" className="header__logo" />
            <div className='header__box' >
              <NavLink to="/sign-up" className='header__name header__name_hover'>Регистрация</NavLink>
            </div>

          </div>
        </header>} />
        <Route path="/sign-up" element={<header className="header">
          <div className="header__container">
            <img src={logo} alt="Логотип" className="header__logo" />
            <div className='header__box' >
              <NavLink to="/sign-in" className='header__name header__name_hover' >Войти</NavLink>
            </div>

          </div>
        </header>} />
      </Routes>
    </>

  )
}

export default Header;