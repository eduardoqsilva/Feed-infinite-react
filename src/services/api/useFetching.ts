import axios from "axios";
import { useEffect, useState } from "react";

const url = 'https://dummyjson.com/'

export function UseFetching(parameter: string, skip: number) {

  const [isFetching, setIsFeching] = useState(false)
  const [data, setData] = useState<object>()

  useEffect(() => {
    setIsFeching(true)
    axios.get(`${url}${parameter}?limit=10&skip=${skip}`)
      .then((res) => {
        setData(res.data[parameter])
      })
      .catch((err) => {
        console.error(err)
      })
      .finally(() => {
        setIsFeching(false)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skip])

  return [data, isFetching]
}