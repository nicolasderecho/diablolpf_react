import React from 'react';

const Spinner = () => {
    return <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>;
}


export const LazyLoadSpinner = () => {
    return <div className='vertical-margin'><Spinner/></div>
}

export default Spinner;