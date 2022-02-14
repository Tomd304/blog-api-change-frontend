import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="navbar"
      style={{
        width: "100%",
        height: 48,
        backgroundColor: "slategrey",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold",
        fontSize: 24,
      }}
    >
      <h1>Create</h1>
      <h1>Update</h1>
    </div>
  );
};

export default Navbar;
