import { useEffect, useState } from "react"
import LineChart from "../../components/Charts/LineChart"
import useFetch from "../../useHook/useFetch"
export default function Co2() {
  const [finalData, setFinalData] = useState()
  const { data, isLoading, errMsg } = useFetch(import.meta.env.VITE_CO2_API)
  function handleData(data) {
    let newData = data?.data?.co2.filter(
      (item) =>
        (item.month === "6" || item.month === "12") &&
        (item.day === "1" || item.day === "30")
    )
    setFinalData(newData)
  }

  useEffect(() => {
    handleData(data)
  }, [data])
  return (
    <article>
      <section className="text">
        <h1>CO2</h1>
        <p>
          For thousands of years, the natural concentration of CO2 in earth
          atmosphere was around 280 ppm. From the beginning of the industrial
          revolution, human activities like the burning of fossil fuels,
          deforestation, and livestock have increased this amount by more than
          30%. This chart rappresent the last 10 year.
        </p>
      </section>
      {errMsg ? (
        errMsg
      ) : isLoading ? (
        <h1>Loading...</h1>
      ) : finalData ? (
        <section className="chart-container">
          <LineChart
            data={finalData}
            x={"year"}
            y={"trend"}
            dataKey={"trend"}
          />
        </section>
      ) : null}
    </article>
  )
}
