import React, { useEffect, useState } from 'react';
import './PortraitPage.css';
import useQuery from './useQuery';
import axios from 'axios';
import LoadingSpinner from './LoadingSpinner';

const PortraitPage = () => {



  const [url, setUrl] = useState('');
  const {response, fLoading, error} = useQuery(url);
  const [loading, setLoading] = useState(false);
  const [film, setFilm] = useState('');
  const [img, setImg] = useState('');

  const onPressButton =async()=>{
    setImg('')
    setImg('http://image.tmdb.org/t/p/w500/'+response?.data?.results[0]?.poster_path);
    setLoading(false)
  }

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = async(event) => {
    setImg('');
    setLoading(true);
    setInputValue(event.target.value);
    setFilm(event.target.value);
    setUrl('https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query='+event.target.value);
    setImg('http://image.tmdb.org/t/p/w500/'+response?.data?.results[0]?.poster_path);
  };

  const handlePoster = () =>{
    if(loading||error){
      return(
        <div className="cinematic-frame">
          <div className="cinematic-box">
            {LoadingSpinner()}
          </div>
        </div>
      )
    }else{
      return(
        <div className="cinematic-frame">
          <div className="cinematic-box">
            <img src={img} alt='No such movie found !'/>
          </div>
        </div>

      )
    }
  }

  return (
    <div className="portrait-page">
      
      <div>
        <label htmlFor="myInput">Type something:</label>
        <input
          type="text"
          id="myInput"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      
      <div className="button-section">
        {/* Your button goes here */}
        <button onClick={onPressButton}>Click me</button>
      </div>

      {handlePoster()}
      
    </div>
  );
}

export default PortraitPage;

