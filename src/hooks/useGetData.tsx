import axios from 'axios';
import  { useEffect, useState } from 'react'

const useGetData = (url: string) => {
  const [response, setResponse] = useState<any>({});
  const [loader, setLoader] = useState(false)
  const getData = async () => {
    setLoader(true)
    try {
      const response = await axios.get(url);
      setResponse({ data: response.data, status: response.status, loader: loader })
    } catch (error) {
      console.error(error);
    }
    setLoader(false)
  }
  useEffect(() => {
    getData()
  }, [url])

  return response
}

export default useGetData