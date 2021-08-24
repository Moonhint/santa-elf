type ReactDispatcher = React.Dispatch<React.SetStateAction<{collapsed: boolean}>>;
interface typeSetCollapsePayload { collapsed?: boolean };
interface typeSetSomethingPayload { something: string };
type typePayload = typeSetCollapsePayload | typeSetSomethingPayload;

const actionSetCollapseValue = (payload:typePayload, setValue:ReactDispatcher) => {
    const { collapsed } = payload as typeSetCollapsePayload;
    if (collapsed !== undefined) setValue({ collapsed });
}

type typeAction = {
    [key:string]: (
        payload: typePayload, 
        setValue: ReactDispatcher
    ) => void;
}
const actions:typeAction = {
    "SET-COLLAPSED-VALUE": actionSetCollapseValue,
}

export default actions;