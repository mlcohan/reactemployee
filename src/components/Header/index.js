import React from "react";
import "./style.css";

function Header () {
    return (
        <div className="header">
            <h1>React Employee Directory</h1>
            <p>Click on the "Name" heading to filter or use the search box to narrow your results</p>
        </div>
    )
}

export default Header;