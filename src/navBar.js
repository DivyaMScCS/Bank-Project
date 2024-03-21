import TooltipFunc from "./tooltip";




function NavBar(){
    return (
      <nav className="navbar navbar-expand-lg navbar-dark ">
       <div className="container-fluid ">
          <a className="navbar-brand" href="#/Home">
              
               <span className="bad">Grow</span> Bank
          </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
          <div className="collapse navbar-collapse links" id="navbarNavAltMarkup">
            <TooltipFunc/>
          </div>
        </div> 
      </nav>
    );
}

export default NavBar;
