import React from 'react';

interface Props {
    date: string;
}


const StringDate: React.FC<Props> = ({date}) => {
    let dateObject = new Date(date);

    return (
        <time dateTime={dateObject.toISOString()}>
            {dateObject.toLocaleDateString('en-us', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
            })}
        </time>
    );
};

export default StringDate;

