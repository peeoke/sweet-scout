function Place({ place }) {
    return (
      <div className="mx-auto border border-gray-300 rounded-lg p-4 m-4 max-w-10xl">
        <h2>{place.name}</h2>
        <p>{place.address}</p>
      </div>
    );
  }

export default Place