// eslint-disable-next-line react/prop-types
export function Search({searchInput, handleChange}){
    return (
        <div>
            <input className="input__search" type="text" onChange={handleChange} value={searchInput} id="search" placeholder="search character"/>
            <label htmlFor="search"></label>
        </div>
    )
}