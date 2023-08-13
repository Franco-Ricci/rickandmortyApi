/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export function CharactersList({ characters }) {
  return (
    <div  className='character__container'>
      {characters?.map((character) => (
        <div key={character.id}>
          <img src={character.image} alt={character.name} />
          <h2 className="title__name">{character.name}</h2>

          <p className="status__text">
            Status:
            {character.status === "Alive"
              ? character.status + " 🟢"
              : character.status === "Dead"
              ? character.status + " 🔴"
              : character.status === "unknown"
              ? character.status + " 🔵"
              : character.status}
          </p>
          <p className="species__text">Specie:{character.species}</p>

          <p className="gender__text">Gender:{character.gender}</p>
          <p className="origin__text">Origin: {character.origin.name}</p>
        </div>
      ))}
    </div>
  );
}
