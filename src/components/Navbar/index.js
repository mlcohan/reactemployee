import React from 'react';
import SearchForm from "../SearchForm";


import "./style.css";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

       <div className="search-area col-4">
        <SearchForm />
    </div>
</nav>
    );
}
export default Navbar;