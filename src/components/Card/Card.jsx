import { Link } from "react-router-dom"

export default function Card({ page, pageLink = "", imgUrl }) {
  return (
    <section className="card">
      <Link to={`/${pageLink}`}>
        <h3>{page}</h3>
        <div className="card-img">
          <img src={imgUrl} alt={page} />
        </div>
      </Link>
    </section>
  )
}
