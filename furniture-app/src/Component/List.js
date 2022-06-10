import React from "react";
import logo from '../Images/Untitled-remove.png';
import lump from '../Images/pixlr-bg-result (1)lump.png';
import '../Css/ListStyle.css';
const List=()=>{
    return(
<>
<header>
    <div className="container container-flex">

    <div className="logoContainer">
        <img src={logo} alt="logo" className="logo"/>
    </div>
    
    <div className="lumpContainer">
        <img src={lump} alt="lump" className="lump"/>
    </div>
    
</div>
</header>
</>
    )
}
export default List;