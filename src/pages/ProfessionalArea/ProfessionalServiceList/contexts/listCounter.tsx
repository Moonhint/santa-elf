import { useContext, createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface ContextValueType {
    allListCount?: number;
    activeListCount?: number;
    nonActiveListCount?: number;
    setAllListCount?: Dispatch<SetStateAction<number>>;
    setActiveListCount?: Dispatch<SetStateAction<number>>;
    setNonActiveListCount?: Dispatch<SetStateAction<number>>;
}
type ContextType = ContextValueType | undefined;
const ListCounterContext = createContext<ContextType>(undefined);

const useListCounterContext = () => {
    const context = useContext<ContextType>(ListCounterContext);
    if (context === undefined){
        throw new Error('useListCounterContext must be use within a ListCounterProvider')
    }
    return context;
}

interface PropsType {
    children: ReactNode;
}
const ListCounterProvider = (props:PropsType) => {
    const { children } = props;
    const [ allListCount, setAllListCount ] = useState(0);
    const [ activeListCount, setActiveListCount ] = useState(0);
    const [ nonActiveListCount, setNonActiveListCount ] = useState(0);

    return (
        <ListCounterContext.Provider value={{
            allListCount,
            activeListCount,
            nonActiveListCount,
            setActiveListCount,
            setNonActiveListCount,
            setAllListCount,
        }}>
            {children}
        </ListCounterContext.Provider>
    );
};

export { ListCounterContext, ListCounterProvider, useListCounterContext };