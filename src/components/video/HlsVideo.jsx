import React, {useEffect, useRef, useState} from 'react';
import Hls from "hls.js";
import styles from './HlsVideo.module.css'

const HlsVideo = ({ urlToLaunch }) => {

    const [hls, setHls] = useState(null)
    const [error, setError] = useState('')
    const refVideo = useRef(null)

    useEffect(() => {

        const video = refVideo.current;
        if(Hls.isSupported()) {

            const hls = new Hls();
            hls.loadSource(urlToLaunch);
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED,function() {
                setError('')
            });
            hls.on(Hls.Events.ERROR, function (event, data) {
                setError(data.details)
                hls.destroy()
            });
            setHls(hls)
        } else {
            setError('not supported')
        }

        return () => {
            if(hls && hls.destroy) {
                hls.destroy()
            }
        }

    }, [urlToLaunch])

    return (
        <div className={styles.videoWrapper}>
            <video
                className={styles.video}
                id={'video'}
                controls={true}
                ref={refVideo}
            />
            <h2 className={styles.errorText}>{error}</h2>
        </div>
    );
};

export default HlsVideo;
