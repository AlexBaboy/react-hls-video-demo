import {useEffect} from "react";

export const useKeyDownHandler = (ref, handler) => {

    useEffect( () => {
            const element = ref.current;
            const isSupported = element && element.addEventListener;
            if (!isSupported) return;

            element.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    handler()
                }
            });

            return () => {
                element.removeEventListener('keydown', handler);
            };
        },
        [ref, handler]
    );
}
