import React from 'react';

const Timeline = (props) => {
    return (
        <div className="wrapper">
            <h1>Lorem ipsum dolor</h1>
            <div className="timeline">
                {props.children}
            </div>
        </div>
    );
};

export default Timeline;