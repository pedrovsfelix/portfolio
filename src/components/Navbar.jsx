import {React, Component} from "react";
import "../css/Navbar.css";
import Logo from "../img/logo.png";

class Navbar extends Component {
  state = {clicked: false};
  handleClick = () => {
    this.setState({clicked: !this.state.clicked});
  }
  render() {
    return (
      <div className="header">
        <section className="flex">
          <a href="#home">
            <img src={Logo} alt="Logo Devnoob" className="logo" />
          </a>

          <nav className={this.state.clicked ? "navbar active" : "navbar"}>
            <a href="#home">Home</a>
            <a href="#sobre">Sobre</a>
            <a href="#projetos">Projetos</a>
          </nav>

          <div id="menu-btn" onClick={this.handleClick} className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></div>
        </section>
      </div>
    );
  }
}

export default Navbar;
