import React from 'react'

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term)
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Search photos</label>
            <input 
              type="text" 
              value={this.state.term}
              placeholder="Search photos (*e.g.: canada)"
              onChange={(e) => this.setState({ term: e.target.value })} 
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar
