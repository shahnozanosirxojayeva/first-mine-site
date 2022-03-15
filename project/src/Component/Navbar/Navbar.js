import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { ThemeContext } from "../../Context";

function Test(props) {

  const { theme } = useContext(ThemeContext);

  const handleClick = () => {
    props.ctx.setTheme(props.ctx.theme === "light" ? "dark" : props.ctx.theme === "dark" ? "purple" : "light");
  };

  return (
    <div className={`${theme} navbar`}>
      <div className="container ">
        <div className="d-flex justify-content-between align-items-center w-100">
          <h2>HolaMundo</h2>
          <ul className={`${theme} navbar-ul`}>
            <li>
              <NavLink className={`${theme} link`} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className={`${theme} link`} to="/write">Write</NavLink>
            </li>
            <li>
              <NavLink className={`${theme} link`} to="/registration">Registar</NavLink>
            </li>
          </ul>
          <form className="form">
            <input className="search-input border-0 bg-light" type="text" placeholder="Search" />
            <button className={`${theme} search-btn`}>Search</button>
          </form>
          <button className={`${theme} toggle`} onClick={handleClick}>{props.ctx.theme}</button>
        </div>
      </div>
    </div>
  )
}

const Navbar = () => {


  return (
    <>
      <ThemeContext.Consumer>
        {(ctx) => <Test ctx={ctx} />}
      </ThemeContext.Consumer>
    </>
  );
};

export default Navbar;

