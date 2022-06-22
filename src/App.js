import './App.css';
import HlsVideo from "./components/video/HlsVideo";
import SearchVideo from "./components/search/SearchVideo";
import {useState} from "react";
import {defaultUrl} from "./constants/default";

function App() {

    const [url, setUrl] = useState(defaultUrl)
    const [urlToLaunch, setUrlToLaunch] = useState(defaultUrl)

    const startHandler = () => {
        setUrlToLaunch(url);
    }

    return (
        <div className="App">
            <header>HLS Demo</header>
            <div className={'demo-wrapper'}>
                <SearchVideo
                    changeUrlHandler={setUrl}
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
