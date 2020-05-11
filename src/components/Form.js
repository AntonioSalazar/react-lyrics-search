import React, { useState } from 'react';

const FormSearch = ({userSearchMain}) => {

    const [ userSearch, setUserSearch ] = useState({
        artist: '',
        song: ''
    })

    const { artist, song } = userSearch;

    const handleChange = e => {
        setUserSearch({
            ...userSearch,
            [e.target.name] : e.target.value
        })
    }

    const artistAndSong = e => {
        e.preventDefault();

        //sendint the info to the main state in App.justify
        userSearchMain(userSearch);
    }

    return ( 
        <section className='formSearch'>
            <div className="container">
                <form 
                    className='row'
                    onSubmit={artistAndSong}    
                >
                    <div className="col-sm-12 col-md-6 formSearch__inputs">
                        <label htmlFor="artist">Artist</label>
                        <input type="text" 
                                id='artist' 
                                name='artist' 
                                placeholder='Artist'
                                onChange={handleChange}
                                value={artist}
                        />
                    </div>
                    <div className="col-sm-12 col-md-6 formSearch__inputs">
                        <label htmlFor="song">Song</label>
                        <input 
                                type="text" 
                                id='song' 
                                name='song' 
                                placeholder='What song are you looking for??'
                                onChange={handleChange}
                                value={song}
                        />

                    </div>
                    <div className='col formSearch__btn'>
                        <input 
                            type="submit"
                            value='Search'
                        />                        
                    </div>
 
                </form>
            </div>
        </section>
     );
}
 
export default FormSearch;