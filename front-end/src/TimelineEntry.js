import React from 'react';

const TimelineEntry = (props) => {
    return (
        <dl class="timeline--entry">
            <dt class="timeline--entry__title">{props.title}</dt>
            <dd class="timeline--entry__detail">{props.detail}</dd>
        </dl>
    );
};

export default TimelineEntry;