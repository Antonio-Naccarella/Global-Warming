import AreaChart from "../../components/Charts/AreaChart"
import useFetch from "../../useHook/useFetch"
import { useState, useEffect } from "react"

export default function No2() {
  const [finalData, setFinalData] = useState()
  const { data, isLoading, errMsg } = useFetch(import.meta.env.VITE_NO2_API)
  function handleData(data) {
    let newData = data?.data?.nitrous.map(
      (item) => (item = { ...item, date: item.date.substring(0, 4) })
    )

    setFinalData(newData)
  }

  useEffect(() => {
    handleData(data)
  }, [data])

  return (
    <article>
      <section className="text">
        <h1>NO2</h1>
        <p>
          Nitrous oxide is a gas that is produced by the combustion of fossil
          fuel and solid waste, nitrogen-base fertilizers, sewage treatment
          plants, natural processes, and other agricultural and industrial
          activities. It is the third largest heat-trapping gas in the
          atmosphere and the biggest ozone-destroying compound emitted by human
          activities.
        </p>
      </section>
      {errMsg ? (
        errMsg
      ) : isLoading ? (
        <h1>Loading...</h1>
      ) : finalData ? (
        <section className="chart-container">
          <AreaChart
            data={finalData}
            x={"date"}
            y={"average"}
            dataKey={"average"}
          />
        </section>
      ) : null}
    </article>
  )
}
