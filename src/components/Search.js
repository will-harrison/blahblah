import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from 'styled-components'

class Search extends Component {
  state = {
    searchTerm: null
  };

  handleChange = (e) => {
    e.persist()
    this.setState(state => {
      return {
        [e.target.name]: e.target.value
      };
    });
  };

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.handleSearch(this.state.searchTerm)
  }

  render() {
    return (
      <form>
        <FormWrapper>
          <Label htmlFor="search">Search for weather by city</Label>
          <Input
            type="text"
            name="searchTerm"
            value={this.state.searchTerm}
            placeholder="Seattle"
            onChange={this.handleChange} />
          <button type="submit">Search</button>
        </FormWrapper>
      </form>
    );
  }
}

Search.propTypes = {
  handleSearch: PropTypes.func
};

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
`

const Label = styled.label`
  font-size: 2em;
  padding: 10px 0;
`
const Input = styled.input`
  font-size: 1.5em;
  text-align: center;
`

export default Search;
