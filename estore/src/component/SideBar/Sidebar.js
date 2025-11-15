import React from "react";
import "./_side-bar.scss";

function Sidebar() {
  return (
    <div className="side-bar">
      <div className="category">Category</div>
      <div className="accordian">
        <div className="accordian-items">
          <div className="accordian-header">
            <div className="accordian-button">
              <div className="category-title">
                <details className="accordion-item">
                  <summary className="accordion-header">
                    <span>Men</span>
                    <span className="arrow">▾</span>
                  </summary>
                  <ul className="submenu">
                    <li>
                      <a href="#">Shirts</a>
                    </li>
                    <li>
                      <a href="#">Pants</a>
                    </li>
                    <li>
                      <a href="#">Shoes</a>
                    </li>
                    <li>
                      <a href="#">Accessories</a>
                    </li>
                  </ul>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
