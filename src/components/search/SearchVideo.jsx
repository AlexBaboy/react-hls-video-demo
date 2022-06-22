import React, {useRef} from 'react';
import {useKeyDownHandler} from "../../hooks/useKeyDownHandler";
import styles from './SearchVideo.module.css'

const SearchVideo = ({changeUrlHandler, startHandler}) => {

    const inputRef = useRef(null);
    useKeyDownHandler(inputRef, startHandler)

    return (
        <div className={styles.urlRow}>
            <input
                ref={inputRef}
                className={styles.urlInput}
                onChange={e => changeUrlHandler(e.target.value)}
                type={'text'}
                placeholder={'Enter your url'}
            />
            <button
                type={'button'}
                onClick={startHandler}
                className={styles.buttonSearch}
            >LAUNCH</button>
        </div>
    );
};

export default SearchVideo;
