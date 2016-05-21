import React, {Component} from 'react';

class NavItem extends Component {
  render() { 
    this.props.items.map(item) => {
      return (
        <li><a href={item.route}>{item.title}</a></li>
      );
    }

  }
}


class Navbar extends Component {
  render() {
    return (

      <nav className="horizBox" id="main-nav">
        <ul className="horizBox">
          <li class="home">
            <a href="/">
              blog
            </a>
          </li>
          <li class="videos">
            <a href="/video-screencasts/">
              videos
            </a>
          </li>
          <li class="almanac">
            <a href="/almanac/">
              almanac
            </a>
          </li>
          <li class="snippets">
            <a href="/snippets/">
              snippets
            </a>
          </li>  
          <li class="forums">
            <a href="/forums/">
              forums
            </a>
          </li>
          <li class="shop">
            <a href="/shop/">
              shop
            </a>
          </li>
          <li class="jobs">
            <a href="/jobs/">
              jobs
            </a>
          </li>
          <li class="close-menu" id="close-menu">
            <a href="#menu-closed">
              &#215; Collapse
            </a>
          </li>
          <li class="show-menu" id="open-menu">
            <a href="#menu">
              &#9776; Menu
            </a>
          </li>
        </ul>
    </nav>



    );
  }

}

export default Navbar;