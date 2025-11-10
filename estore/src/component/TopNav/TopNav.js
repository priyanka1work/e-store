import './TopNav.css'
const TopNav = () => {
  return (
    <div className="header">
      <div className="brand">eStore</div>

      <div className="searchBox">
        <select className="select-category">
          <option>Men</option>
          <option>Women</option>
          <option>Kids</option>
        </select>
        <input placeholder="Search..." />
        <button>🔍</button>
      </div>
      <div className="utility">
        <div className="utility-icon login">
          <a>👤 Login/Register</a>
        </div>
        <div className="utility-icon likes">
          <a>🤍 Likes</a>
        </div>
        <div className=" utility-icon cart">
          <a>🛒 Cart</a>
        </div>
      </div>
    </div>
  );
};
export default TopNav;
