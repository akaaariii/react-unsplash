import React from 'react'

const SearchBar = ({ onSubmit, term, onChangeInput }) => {

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label>Search Photos</label>
          <input 
            type="text" 
            value={term}
            placeholder="Search photos (*e.g: canada, cafe, beach, architecture)"
            onChange={onChangeInput} 
          />
        </div>
      </form>
    </div>
  );
}

export default SearchBar
