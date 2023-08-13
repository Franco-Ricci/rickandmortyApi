import { useEffect, useState } from "react";
import { Filter } from "./components/Filter";
import { Search } from "./components/Search";
import { Pagination } from "./components/Pagination";
import { CharactersList } from "./components/CharactersList";


function App() {

  const [characters, setCharacters] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filterSelect, setFilterSelect] = useState("");
  const [pages, setPages] = useState(1);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const [timeoutId, setTimeoutId] = useState(null);

  const handleChange = (e) => {
    const searchValue = e.target.value;
    setSearchInput(searchValue);
    console.log(searchValue);
    console.log(searchInput);
    clearTimeout(timeoutId);

    setTimeoutId(
      setTimeout(() => {
        // Call the API after the debounce timeout
        getData();
      }, 1000)
    );
  };

  useEffect(() => {
    // Cleanup function to clear the timeout on unmount and re-render
    return () => {
      clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  const handleFilter = (e) => {
    let newFilterValue = e.target.value;
    console.log(newFilterValue);
    setFilterSelect(newFilterValue);
    setCurrentPage(1);
  };

  useEffect(() => {
    // Change body background color based on error state
    document.body.style.height = error ? "100vh" : "";

  }, [error]);

  useEffect(() => {
    console.log(pages);
    console.log(currentPage);
    getData();
  }, [filterSelect, currentPage]);

  function getData() {
    const ApiBase = "https://rickandmortyapi.com/api/character";
    let queryParams = `?page=${currentPage}`;

    if (searchInput.length >= 3) {
      queryParams += `&name=${searchInput}`;
    }

    if (filterSelect !== "all") {
      queryParams += `&status=${filterSelect}`;
    }

    const API_REST = ApiBase + queryParams;

    fetch(API_REST)
      .then((res) => {
        if (!res.ok) {
          setError(true);
          throw new Error("Network response was not ok");
        }
        setError(null);
        return res.json();
      })
      .then((data) => {
        setCharacters(data.results);
        console.log(data.info);
        setPages(data.info.pages);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError("name not finded");
        setCharacters([]);
      });
  }

  return (
    <>
      <main className="main__container">
        <div className="main__title">
          <h1>Rick and Morty Api</h1>
          <div className="main__options">
            <Filter filter={filterSelect} handleFilter={handleFilter}></Filter>
            <Search
              searchInput={searchInput}
              handleChange={handleChange}
            ></Search>
          </div>
        </div>

        {error && <p className="text__error">{error}</p>}
        <CharactersList characters={characters} />

        {error ? (
          document.body.classList.add("body-with-error")
        ) : (
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            pages={pages}
          />
        )}
      </main>
    </>
  );
}

export default App;
