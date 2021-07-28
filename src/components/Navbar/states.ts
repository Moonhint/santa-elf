import { useState } from 'react';

let defaultValue = {
    numb: 1,
};

function useNavbarState() {
    const [value, setValue] = useState(defaultValue);

    const dispatcher = (type: string) => {
        switch (type) {
            case "add-one":
                console.log("add")
                const newNumber = value.numb + 1;
                setValue({
                    numb: newNumber
                });
                break;
            default:
                break;
        }
    }
    return { value, dispatcher };
}

export default useNavbarState;