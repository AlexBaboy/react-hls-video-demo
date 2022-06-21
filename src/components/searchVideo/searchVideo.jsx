import React from 'react';

const SearchVideo = ({changeUrl, startHandler}) => {

    const keyDownHandler = (e) => {
        if (e.key === 'Enter') {
            startHandler()
        }
    }

    return (
        <div className={'url-row'}>
            <input
                className={'url-input'}
                onChange={e => changeUrl(e.target.value)}
                type={'text'}
                onKeyDown={e => keyDownHandler(e)}
            />
            <button
                type={'button'}
                onClick={startHandler}
            >Start</button>
        </div>
    );
};

export default SearchVideo;
