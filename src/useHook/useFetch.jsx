import axios from "axios"
import { useState, useEffect } from "react"

export default function useFetch(url, params = {}) {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [errMsg, setErrMsg] = useState("")

  async function fetchData() {
    setIsLoading(true)
    try {
      const response = axios.get(url, params)
      if (response) {
        response.then((res) => {
          setData(res)
        })
        setIsLoading(false)
      }
    } catch (error) {
      if (error.response.status === 404) {
        setErrMsg("We didn't find your data")
      }
      setErrMsg(error.message)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { data, isLoading, errMsg }
}
