import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="navbar"
      style={{
        width: "100%",
        height: 60,
        backgroundColor: "slategrey",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold",
        fontSize: 24,
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Link to="/create">
          <h1>Create</h1>
        </Link>
        <Link to="/update">
          <h1>Update</h1>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
