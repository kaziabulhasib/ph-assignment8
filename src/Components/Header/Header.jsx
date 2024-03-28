import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  const links = (
    <>
      <div className='nav-font flex gap-4 text-[18px] text-[#131313CC]'>
        <NavLink to='/' className='nav-link' activeClassName='active'>
          Home
        </NavLink>

        <NavLink
          to='/listedbooks'
          className='nav-link'
          activeClassName='active'>
          Listed Books
        </NavLink>

        <NavLink to='/pagesread' className='nav-link' activeClassName='active'>
          Pages to Read
        </NavLink>

        {/* extra route  */}

        <NavLink to='/about' className='nav-link' activeClassName='active'>
          About Us
        </NavLink>

        <NavLink to='/contact' className='nav-link' activeClassName='active'>
          Contact Us
        </NavLink>
      </div>
    </>
  );

  return (
    <div className='navbar bg-base-100 nav-font'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
            {links}
          </ul>
        </div>
        <a className='btn btn-ghost text-3xl font-bold'>Book Vibe</a>
      </div>
      <div className='navbar-center  hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>{links}</ul>
      </div>
      <div className='navbar-end'>
        <button className='  px-6 py-4 bg-[#23BE0A] text-white font-semibold text-[18px] mr-4 rounded-lg'>
          Sign In
        </button>
        <button className='  px-6 py-4 bg-[#59C6D2] text-white font-semibold text-[18px] mr-4 rounded-lg'>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Header;
