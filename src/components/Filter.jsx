// eslint-disable-next-line react/prop-types
export function Filter({filterSelect, handleFilter}) {
  return (
    <select className="filter__select" onChange={handleFilter} value={filterSelect} >
      <option  hidden>
        {" "}
        -- status --{" "}
      </option>
      <option value="all" >all</option>
      <option value ="alive">alive</option>
      <option value="dead">dead</option>
      <option value="unknown">unknown</option>
    </select>
  );
}
