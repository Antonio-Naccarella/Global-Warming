import { Link } from "react-router-dom"
import "./styles.scss"

export default function Navbar() {
  return (
    <nav>
      <h1>Global Warming</h1>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <ul className="charts">
            <li>
              <Link to={"/temperature"}>Temperature</Link>
            </li>
            <li>
              <Link to={"/methane"}>Methane</Link>
            </li>
            <li>
              <Link to={"/co2"}>CO2</Link>
            </li>
            <li>
              <Link to={"/no2"}>NO2</Link>
            </li>
            <li>
              <Link to={"/polar-ice"}>Polar Ice</Link>{" "}
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}

{
  /* <li>
<Link to={"/temperature"}>Temperature</Link>
</li>
<li>
<Link to={"/methane"}>Methane</Link>
</li>
<li>
<Link to={"/co2"}>CO2</Link>
</li>
<li>
<Link to={"/no2"}>NO2</Link>
</li>
<li>
<Link to={"/polar-ice"}>Polar Ice</Link>{" "}
</li> */
}
