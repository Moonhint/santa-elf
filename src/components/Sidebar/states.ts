import { useState, useCallback } from 'react';
import { isMobile } from 'react-device-detect';
import actions from './actions';

let defaultValue = {
    collapsed: isMobile,
    selectedMenu: ['membership'],
};

type typeDispatcherPayload = {
    collapsed?: boolean;
    selectedMenu?: string[];
}

function useNavbarState() {
    const [value, setValue] = useState(defaultValue);
    const dispatcher = useCallback((type: string, payload:typeDispatcherPayload = {}) => {
        actions[type](value, payload, setValue);
    }, []);
    return { value, dispatcher };
}

export default useNavbarState;
