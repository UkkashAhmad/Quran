import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import './Header.css'


function Header() {
  return(
<>
<nav className="navbar navbar-expand-lg navbar-light custom-navbar p-3">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      ISDP.
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className=" collapse navbar-collapse" id="navbarNavDropdown">
      
      <ul className="navbar-nav ms-auto ">
      <li className="text nav-item dropdown">
          <a
            className="nav-link mx-2 dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            خدمات
          </a>
          <ul
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <li>
              <Link className="text  dropdown-item" to='/parah'>
                الجزء
              </Link>
            </li>
            <li>
              <Link className="text dropdown-item" to='/sajda'>
                            مقام السجود   
              </Link>
            </li>
            <li>
              <Link className="text dropdown-item" to='/weather'>
                              موسم  
              </Link>
            </li>
            <li>
              <Link className="text dropdown-item" to='/searchWords'>
                        الکلمات

              </Link>
            </li>
            <li>
              <Link className="text dropdown-item" to='/surah'>
                        السورۃ

              </Link>
            </li>
          </ul>
        </li>


        <li className="text nav-item">
          <Link className=" nav-link mx-2" to='/contact'>
          اتصل بنا
          </Link>
        </li>
       
        <li className="text nav-item">
          <Link className=" nav-link mx-2" to='/about'>
              من نحن    
              
                    </Link>
        </li>
      

        <li className="text nav-item">
          <Link className="  nav-link mx-2 active" aria-current="page" to="">
            الرئيسیہ
          </Link>
        </li>
       
      </ul>
      <ul className="navbar-nav ms-auto d-none d-lg-inline-flex">
        <li className="nav-item mx-2">
          <a className="nav-link text-dark h5" href="" target="blank">
          <i class="bi bi-github"></i>
          </a>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link text-dark h5" href="" target="blank">
          <i class="bi bi-instagram"></i>
          </a>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link text-dark h5" href="" target="blank">
          <i class="bi bi-facebook"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>



</>
)

}

export default Header;
