import React from 'react';
import ReactDOM from 'react-dom';
import Timeline from './Timeline';
import TimelineEntry from './TimelineEntry';

const App = () => {
    return (
        <Timeline>
            <TimelineEntry title='Title A' detail='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.' />
            <TimelineEntry title='Title B' detail='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.' />
            <TimelineEntry title='Title C' detail='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.' />
        </Timeline>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));