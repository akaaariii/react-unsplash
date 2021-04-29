import React from 'react'

const SearchBar = ({ onSubmit, term, onChangeInput }) => {

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label>Search photos</label>
          <input 
            type="text" 
            value={term}
            placeholder="Search photos (*e.g.: canada)"
            onChange={onChangeInput} 
          />
        </div>
      </form>
    </div>
  );
}

export default SearchBar
