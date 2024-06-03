import useFetch from "../../useHook/useFetch"
import LineChart from "../../components/Charts/LineChart"
import { useState, useEffect } from "react"
export default function Ice() {
  const { data, isLoading, errMsg } = useFetch(
    import.meta.env.VITE_POLAR_ICE_API
  )
  const [finalData, setFinalData] = useState([])
  function handleData(data) {
    let newData = []
    for (let item in data?.data.arcticData.data) {
      let year = item.substring(0, 4)
      if (year > 1989) {
        let obj = data?.data.arcticData.data[item]
        let newObj = { ...obj, year: year }
        newData.push(newObj)
      }
    }
    setFinalData(newData)
  }

  useEffect(() => {
    handleData(data)
  }, [data])

  return (
    <article>
      <section className="text">
        <h1>Global Sea Ice Extent</h1>
        <p>
          The arctic is warming around twice as fast as global average. Some of
          the reasons for this are: The arctic amplification, the albedo effect,
          and black carbon. From 1979 to 1996, we lost 2.2 – 3% of the arctic
          ice cover. From 2010 to present we are losing 12.85% per decade!
          Another consequence is permafrost thawing. This is a process in which
          large amounts of methane is released to the atmosphere, fueling more
          the process of global warming.
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
            y={"value"}
            x={"year"}
            dataKey={"value"}
          />
        </section>
      ) : null}
    </article>
  )
}
