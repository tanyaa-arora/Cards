import Cards from "./Cards";
import Navbar from "./Navbar";
import { useState } from "react";
function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  function handleClick() {

    fetch("https://reqres.in/api/users?page=2")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          )
        }
        return response.json()
      })
      .then(actualData => {
        setData(actualData)
        setError(null)
      })
      .catch(err => {
        setError(err.message)
        setData(null)
      })
      .finally(() => {
        setLoading(false)
      }

      )

  }



  return (
    <div className="App">
      <Navbar handle={handleClick} />
      {/* {loading && <div>A moment please</div>} */}
      {error &&
        (<div>{`There is a problem fetching the data - ${error}`}</div>)}
      {data && <Cards data={data} loading={loading}/>}
    </div>
  );
}

export default App;
