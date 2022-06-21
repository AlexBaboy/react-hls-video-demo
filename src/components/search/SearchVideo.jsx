import React, {useRef} from 'react';
import {useKeyDownHandler} from "../hooks/useKeyDownHandler";
import styles from './SearchVideo.module.css'

const SearchVideo = ({changeUrl, startHandler}) => {

    const inputRef = useRef(null);
    useKeyDownHandler(inputRef, startHandler)

    return (
        <div className={styles.urlRow}>
            <input
                ref={inputRef}
                className={styles.urlInput}
                onChange={e => changeUrl(e.target.value)}
                type={'text'}
            />
            <button
                type={'button'}
                onClick={startHandler}
                className={styles.buttonSearch}
            >Start</button>
        </div>
    );
};

export default SearchVideo;
