import './App.css';
import HlsVideo from "./components/video/hlsVideo";
import SearchVideo from "./components/searchVideo/searchVideo";
import {useState} from "react";
import {defaultUrl} from "./components/constants/default";

function App() {

    const [url, setUrl] = useState(defaultUrl)
    const [urlToLaunch, setUrlToLaunch] = useState(defaultUrl)

    const changeUrlHandler = (url) => {
        setUrl(url)
    }

    const startHandler = () => {
        setUrlToLaunch(url);
    }

    return (
        <div className="App">
            <header>HLS Demo</header>
            <div className={'demo-wrapper'}>
                <SearchVideo
                    changeUrl={changeUrlHandler}
                    startHandler={startHandler}
                />
                <HlsVideo
                    urlToLaunch={urlToLaunch}
                />
            </div>
        </div>
    );
}

export default App;
