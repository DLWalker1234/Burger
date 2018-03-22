import React from 'react';

import './Person.css';

const person = () => {
    return (
        <div className='Person'>
            <p>I'm a person and I am {Math.floor(Math.random() * 30)}!</p>
        </div>
    )
};

export default person;