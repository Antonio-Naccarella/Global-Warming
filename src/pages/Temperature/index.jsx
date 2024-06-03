import useFetch from "../../useHook/useFetch"
import AreaChart from "../../components/Charts/AreaChart"
import { useEffect, useState } from "react"

export default function Temperature() {
  const [finalData, setFinalData] = useState()

  const { data, isLoading, errMsg } = useFetch(
    import.meta.env.VITE_TEMPERATURE_API
  )

  function handleData(data) {
    let newData = data?.data?.result
      .map(
        (item) =>
          (item = { average: item.station, time: item.time.substring(0, 4) })
      )
      .filter((item) => item.time % 4 === 0)

    setFinalData(newData)
  }
  useEffect(() => {
    handleData(data)
  }, [data])
  return (
    <article>
      <section className="text">
        <h1>Temperature</h1>
        <p>
          The current global warming rate is not natural. From 1880 to 1981 was
          (0.07°C / 0.13°F) per decade. Since 1981 this rate has increased to
          (0.18°C / 0.32°F). Some of the past sudden increase on global
          temperature present in this graph, correspond to the Roman Warm Period
          and the Medieval Warm Period. These events were at regional and not
          global scale. The total average global temperature rise since the
          industrial revolution is around (1.0 °C / 1.8 °F). Earth northern
          hemisphere is warming faster. The arctic has warmed between (2 °C /
          3.6 °F) and (4 °C / 7.2 °F). Earth temperature and the proportion of
          gases such as Co2, methane, and nitrous oxide in the atmosphere is
          strictly correlated.
        </p>
      </section>
      {errMsg ? (
        errMsg
      ) : isLoading ? (
        <h1>Loading...</h1>
      ) : data ? (
        <section className="chart-container">
          <AreaChart
            data={finalData}
            x={"time"}
            y={"average"}
            dataKey={"average"}
          />
        </section>
      ) : null}
    </article>
  )
}
