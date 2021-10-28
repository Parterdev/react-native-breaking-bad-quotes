import { useEffect, useRef, useState } from "react"
import { Quote } from "../interfaces/Quote";

interface FetchState {
  data: Quote[];
}

export const useFetch = (url:string) => {

  const [isLoading, setIsLoading] = useState(true);

  const [state, setState] = useState<FetchState>({
    data: [],
  });

  //To get mounted component reference
  const isMounted = useRef(true);

  const fetchQuote = async () => {
    try {
      const resp = await fetch(url);
      const result = await resp.json();
      //console.log("Async data", result);
      if(isMounted.current) {
        setIsLoading(false);
        setState({
          data: result,
        });
      }else {
        console.log("Component is not mounted");
      }
    } catch (error) {
      //console.log("Error fetching data", setState({data: []}));
    }
  }

  useEffect(() => {
    return () => {
      isMounted.current = false;
    }
  }, [])

  useEffect(() => {
    //To show loading per url fetch
    setIsLoading(true);
    setState({
      data: [],
    })
    fetchQuote();
  }, [url])


  return {
    ...state,
    isLoading
  };

}