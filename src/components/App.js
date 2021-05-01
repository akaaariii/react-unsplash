import React, { useState, useEffect } from 'react'
import Pagination from '@material-ui/lab/Pagination'
import unsplash from '../api/unsplash'
import ImageList from './ImageList'
import SearchBar from './SearchBar'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(() => ({
  root: {
    '& > *': {
      justifyContent: 'center',
    },
  },
}));

const App = () => {
  const classes = useStyles();
  const [term, setTerm] = useState('cafe');
  const [query, setQuery] = useState(term);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const title = query.substring(0, 1).toUpperCase() + query.substring(1).toLowerCase();


  const getData = async () => {
    const response = await unsplash.get('/search/photos', {
      params: { 
        query: query,
        per_page: 10,
        page: page
      },
    });
    setImages(response.data.results);
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    setQuery(term);
  }

  const onChangeInput = (e) => {
    setTerm(e.target.value);
  }

  const onChangePage = (event, value) => {
    setPage(value);
  }

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, [query, page])

  
  return (
    <div className="ui container" style={{ marginTop: '10px', paddingBottom: '20px' }}>
      <SearchBar onSubmit={onFormSubmit} onChangeInput={onChangeInput} term={term} />
      <h1><i class="camera retro icon"></i>{title}</h1>
      <ImageList images={images} />
      {images.length ? 
        <Pagination count={10} page={page} onChange={onChangePage} className={classes.root} />
        : null
      }
    </div>
  )
}

export default App
