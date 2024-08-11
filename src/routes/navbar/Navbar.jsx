import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar__logo">
            <a href="/">YourLogo</a>
        </div>
        <ul className="navbar__links">
            <li><a href="/">Home</a></li>
            <li><a href="/login">Login</a></li>
        </ul>
        <div className="navbar__toggle">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </nav>

  )
}

export default Navbar