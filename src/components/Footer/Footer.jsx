import facebook from "../../assets/img/icona-fb.png"
import instagram from "../../assets/img/icona-instagram.png"
import twitterx from "../../assets/img/icona-twitterx.png"
import "./styles.scss"

export default function Footer() {
  return (
    <footer>
      <div className="line"></div>
      <div className="footer-container">
        <h3>
          © 2024 Global Warming
          <br />
          Antonio Naccarella
        </h3>
        <ul className="social">
          <li>
            <a href="https://www.facebook.com/" target="_blank">
              <img src={facebook} alt="Facebook"></img>{" "}
            </a>{" "}
          </li>
          <li>
            <a href="https://x.com/" target="_blank">
              <img src={twitterx} alt="X"></img>{" "}
            </a>{" "}
          </li>
          <li>
            <a href="https://www.instagram.com/" target="_blank">
              <img src={instagram} alt="Instagram"></img>{" "}
            </a>{" "}
          </li>
        </ul>
      </div>
    </footer>
  )
}
