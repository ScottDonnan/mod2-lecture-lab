import { useEffect, useState } from "react";
import CakeCard from "./CakeCard";
import CakeDetail from "./CakeDetail"
import SearchBar from "./SearchBar"
import CakeForm from "./CakeForm"
import Flavors from "./Flavors";

function App() {
  const [ isVisible, setIsVisible] = useState(true)
  const [ selectedCake, setSelectedCake] = useState(null)
  const [cakeList, setCakes] = useState([])
  const [flavor, setFlavor]= useState([])

  useEffect(() => {
    fetch('http://localhost:4000/cakes')
    .then(r => r.json())
    .then(data => setCakes(data))
    fetch('http://localhost:4000/flavor')
    .then(r => r.json())
    .then(data => setFlavor(data))
  }, [])

  function handleAddCake(cake){
    setCakes([
      cake, ...cakeList
    ])
  }

  return (
    <>
      <h1>Flatiron Bakes</h1>
      <CakeForm handleAddCake={handleAddCake}/>

      {flavor.map(flavor => <Flavors flavor={flavor} />)}
      {/* {isVisible ? <SearchBar/> : null} */}
      {/* <button onClick={() => setIsVisible(!isVisible)}>{isVisible ? 'Hide' : 'Show'}</button> */}

      {selectedCake ? <CakeDetail cake={selectedCake}/> : null}

      {cakeList.map(c => <CakeCard setSelectedCake={setSelectedCake} cake={c}/>)}
    </>
  );
}

export default App;