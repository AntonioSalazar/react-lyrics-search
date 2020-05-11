import React from 'react';

const Error = ({errorMessage}) => {
    return ( 
        <div className='error'>
            <h3 className='error__title'>{errorMessage}</h3>
        </div>
     );
}
 
export default Error;