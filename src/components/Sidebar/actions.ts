type currentValueType = {collapsed: boolean, selectedMenu: string[]};
type ReactDispatcher = React.Dispatch<React.SetStateAction<currentValueType>>;
interface typeSetCollapsePayload { collapsed?: boolean };
interface typeSetSelectedMenuPayload { selectedMenu?: string[] };
type typePayload = typeSetCollapsePayload | typeSetSelectedMenuPayload;

const actionSetCollapseValue = (value:currentValueType, payload:typePayload, setValue:ReactDispatcher) => {
    const { collapsed } = payload as typeSetCollapsePayload;
    if (collapsed !== undefined) setValue({ ...value, collapsed });
}

const actionSetSelectedMenuValue = (value:currentValueType, payload:typePayload, setValue:ReactDispatcher) => {
    const { selectedMenu } = payload as typeSetSelectedMenuPayload;
    if (selectedMenu !== undefined) setValue({ ...value, selectedMenu });
}

type typeAction = {
    [key:string]: (
        value: currentValueType,
        payload: typePayload, 
        setValue: ReactDispatcher
    ) => void;
}
const actions:typeAction = {
    "SET-COLLAPSED-VALUE": actionSetCollapseValue,
    "SET-SELECTED-MENU-VALUE": actionSetSelectedMenuValue,
}

export default actions;