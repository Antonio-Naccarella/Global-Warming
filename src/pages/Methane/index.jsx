import AreaChart from "../../components/Charts/AreaChart"
import useFetch from "../../useHook/useFetch"
import { useState, useEffect } from "react"

export default function Methane() {
  const [finalData, setFinalData] = useState()
  const { data, isLoading, errMsg } = useFetch(import.meta.env.VITE_METHANE_API)
  function handleData(data) {
    let newData = data?.data?.methane
      .map((item) => (item = { ...item, date: item.date.substring(0, 4) }))
      .filter((item) => item.date % 2 === 0)
    setFinalData(newData)
  }

  useEffect(() => {
    handleData(data)
  }, [data])

  return (
    <article>
      <section className="text">
        <h1>Methane</h1>
        <p>
          Methane is a flammable gas formed by geological and biological
          processes. Some of the natural ones are leaks from natural gas systems
          and wetlands. 50-65% of total global methane emissions come from human
          activities. These include livestock, agriculture, oil and gas systems,
          waste from homes and businesses, landfills, and so on. Methane is a
          gas with a global warming potential several times stronger than of
          CO2. For more than 650,000 years, methane concentration in the
          atmosphere was between 350 – 800 ppb. From the beginning of the
          industrial revolution, human activities have increased this amount by
          around 150%.
        </p>
      </section>
      {errMsg ? (
        errMsg
      ) : isLoading ? (
        <h1>Loading..</h1>
      ) : finalData ? (
        <section className="chart-container">
          <AreaChart data={finalData} x="date" y="average" dataKey="average" />
        </section>
      ) : null}
    </article>
  )
}
