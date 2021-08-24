import { useState } from 'react';
import { isMobile } from 'react-device-detect';
import actions from './actions';

let defaultValue = {
    collapsed: isMobile,
};

type typeDispatcherPayload = {
    collapsed?: boolean
}

function useNavbarState() {
    const [value, setValue] = useState(defaultValue);
    const dispatcher = (type: string, payload:typeDispatcherPayload = {}) => {
        actions[type](payload, setValue);
    }
    return { value, dispatcher };
}

export default useNavbarState;
