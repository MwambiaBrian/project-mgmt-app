import logo from "../assets/logo.jpeg";
function Header() {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container">
        <a className="navbar-brand" href="">
          <div className="d-flex">
            <img src={logo} alt="logo" className="mr-2" />
            <div>Malik's Agency</div>
          </div>
        </a>
      </div>
    </nav>
  );
}

export default Header;
