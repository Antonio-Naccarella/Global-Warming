import Card from "../../components/Card/Card"
import earthTemperature from "../../assets/img/earth-temperature.png"
import methaneIcon from "../../assets/img/methane-icon.png"
import co2Icon from "../../assets/img/co2-icon.png"
import no2Icon from "../../assets/img/no2-icon.png"
import polarIce from "../../assets/img/polar-icon.png"

export default function Home() {
  return (
    <>
      <article>
        <section className="text">
          {" "}
          <h1>A World to Save</h1>
          <h2>Explore the data. Understand the change. Act now.</h2>
          <p>
            This platform is dedicated to raising awareness about global
            warming. Here, you'll find detailed charts on the trends of global
            temperatures, methane, CO2 levels, NO2, and the reduction of polar
            ice. Together, we can make a difference.
          </p>
        </section>
        <section className="cards-container">
          <Card
            page="Temperature"
            pageLink="temperature"
            imgUrl={earthTemperature}
          />
          <Card page="Methane" pageLink="methane" imgUrl={methaneIcon} />
          <Card page="CO2" pageLink="co2" imgUrl={co2Icon} />
          <Card page="NO2" pageLink="no2" imgUrl={no2Icon} />
          <Card page="Polar Ice" pageLink="polar-ice" imgUrl={polarIce} />
        </section>
      </article>
    </>
  )
}
