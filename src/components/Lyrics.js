import React from 'react';

const Lyrics = ({lyrics}) => {
    if(lyrics.length === 0 ) return null
    return (
        <section className=" lyrics col-sm-12 col-md-6">
            <div className="container">
                <div>
                    <h3 className='lyrics__title'>Lyrics</h3>
                    <p className='lyrics__song'>{lyrics}</p>
                </div>
            </div>
        </section>
      );
}
 
export default Lyrics;