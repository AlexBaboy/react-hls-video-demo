import React, {useEffect, useState} from 'react';
import Hls from "hls.js";

const HlsVideo = ({ urlToLaunch }) => {

    const [hls, setHls] = useState(null)
    const [error, setError] = useState('')

    useEffect(() => {


        const video = document.getElementById('video');
        if(Hls.isSupported()) {

            const hls = new Hls();
            hls.loadSource(urlToLaunch);
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED,function() {
                video.play();
            });
            setError('')
            hls.on(Hls.Events.ERROR, function (event, data) {
                switch (data.details) {
                    default:
                        setError(data.details)
                        break;
                }
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
        <div className={'video-wrapper'}>
            <video
                className={'video'}
                id={'video'}
                controls={true}
            />
            <h2 className={'errorText'}>{error}</h2>
        </div>
    );
};

export default HlsVideo;
