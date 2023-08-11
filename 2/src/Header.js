import React from "react";

function Header() {
  return (
    <>
      <nav className="navbar navbar-light bg-light" >
        <div className="container"style={{backgroundColor:"black"}} >
          <h1 style={{ textAlign: "center", margin: "auto", fontSize: "2rem" ,color:"aqua" }} className="navbar-brand mb-0 h1">
            Train Ticket Booking
          </h1>
        </div>
      </nav>
    </>
  );
}

export default Header;
