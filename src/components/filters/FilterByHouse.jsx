function FilterByHouse() {

  return (
    <div>
    <label htmlFor="house">
      Selecciona la casa
      <select>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Slytherin">Slytherin</option>
      </select>
    </label>
    </div>
  );
}

export default FilterByHouse;