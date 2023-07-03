const Filter = ({ filter, filterByName }) => {
    return (
      <div>
        <div>
          filter shown with: <input value={filter} onChange={filterByName} />
        </div>
      </div>
    );
  };
  
  export default Filter;
  