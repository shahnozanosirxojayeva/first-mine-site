import React, { useContext } from "react";
import "./home.css"
import { ThemeContext } from "../../Context";

function Test(props) {

    const { theme } = useContext(ThemeContext);

    const handleClick = () => {
      props.ctx.setTheme(props.ctx.theme === "light" ? "dark" : "dark" ? "purple" : "light");
    };

  return (
    <div className={`${theme} home`}>
        <div>
            <h1 className='display-1 fw-bold' >Web Design Blocks</h1>
            <p className='fs-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    </div>
  )
}


const Home = () => {


    return (
      <>
        <ThemeContext.Consumer>
          {(ctx) => <Test ctx={ctx} />}
        </ThemeContext.Consumer>
      </>
    );
  };
  
  export default Home;