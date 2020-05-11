import React, {Fragment, useEffect, useState} from 'react';

//Components
import Header from './components/Header';
import FormSearch from './components/Form';
import Error from './components/Error';
import Lyrics from './components/Lyrics';
import Artist from './components/Artist';


function App() {
  //Main state
  const [artist, setArtist] = useState('');
  const [song, setSong ] = useState('');
  const [error, setError] = useState(false);
  const [lyrics, setLyrics] = useState('');
  const [artistHistory, setArtistInfo] = useState({});

  const userSearchMain = data => {
    //validate both fields have been filled
    if (data.artist === '' || data.song==='') {
      setError(true);
      return
     }
    setError(false); 

    //saving the info from the form to our main state
    setArtist(data.artist);
    setSong(data.song);
  }

  //ERROR component

  let errorComponent;
  if (error) {
    //if there is an error, show the error component
    errorComponent = <Error errorMessage='both fields are required'/>
  } else {
    errorComponent = null
  }

  //API CALL - GET ARTIST

  useEffect(() => {
    if(artist === '' || song ===' ') return;
    const getArtistandLyrics = async() => {
      const urlLyrics = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      const urlArtist = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`
      
      const [lyrics, info ] = await Promise.all([
         fetch(urlLyrics),
         fetch(urlArtist)
      ]);
      const responseLyrics = await lyrics.json()
      const responseArtist = await info.json()
      setLyrics(responseLyrics.lyrics);
      setArtistInfo(responseArtist.artists[0]);

    }

    getArtistandLyrics();
  }, [artist, lyrics, artistHistory, song])

  return (
    <Fragment>
      <Header/>

      <main className='container'>

        <FormSearch
          userSearchMain={userSearchMain}
        />
        {errorComponent}
        <div className="main">
          <Lyrics
            lyrics={lyrics}
          />
          <Artist
            artistHistory={artistHistory}
          />          
        </div>

      </main>      
    </Fragment>

  );
}

export default App;
