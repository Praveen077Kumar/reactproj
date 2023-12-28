import React from 'react';

const Greet = (props) => {
    return (
        <div className='container card pt-3 mt-3 register-container text-center'>
                <h3>{props.name}</h3>
                <h3>Thank you for Joining Us</h3>
                <h3>Varification sent to {props.email}.</h3>
        </div>
    );
}

export default Greet;
