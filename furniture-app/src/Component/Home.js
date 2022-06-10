import React from "react";
import { NavLink } from "react-router-dom";
import homeimg from '../Images/pixlr-bg-result.png';
import '../Css/Home.css';
const Home=()=>{
    return(
<>
<div className="mainSection">
    <div className="contentBox">
        <h1>Minimalistic</h1>
        <h2>Style Furniture</h2>
        <p>Welcome to the home of bold design with soul. <br /> As South Africa’s leading furniture and homeware <br /> store, 
            our aesthetic is about combining clean,<br /> confident Scandinavian-inspired design <br />
             with the raw, authentic textures of mother nature.</p> <br />
             
        <div className="btnBox">
            <div className="btn">
                <NavLink to="/" className="SHopNow">Shop Now</NavLink>
            </div>
        </div>
    </div>
    <div className="imgContainer">
        <div className="backColor"></div>
        <img src={homeimg} alt="home"/>
    </div>
</div>
</>
    )
}
export default Home;