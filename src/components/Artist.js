import React from 'react';

const Artist = ({artistHistory}) => {
    if (Object.keys(artistHistory).length === 0) return null

    const { strArtist, strBiographyEN, strArtistThumb} = artistHistory

    return ( 
        <section className='artist col-sm-12 col-md-6'>
            <div className="container">
                <div className="col-sm-12 col-md-6">
                    <h3 className="artist__title">Artist Info</h3>
                    <div className="card" >
                        <img className="card-img-top" src={strArtistThumb} alt="Card artist cap"/>
                        <div className="card-body">
                            <h5 className="card-title">{strArtist}</h5>
                            <p className="card-text">{strBiographyEN}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Artist;