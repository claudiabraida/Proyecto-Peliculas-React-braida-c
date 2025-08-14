import { useState } from "react"

export default function useLocalStorage() {
  const [lS, setLs] = useState([]);

  function set(type, data){
    return localStorage.setItem(type, JSON.stringify(data));
  }

  function get(type){
    const dataCollectionLs = JSON.parse(localStorage.getItem(type));
    setLs(dataCollectionLs);
    return dataCollectionLs;
  }


  return {
    set,
    get,
    lS
  }
}
