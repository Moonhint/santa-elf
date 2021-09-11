import { ReactNode } from 'react';
import locale from './locale';
import InputWrapperView from './view';
import { LOCALE_KEY } from './const';
import { registerLocale } from '@/shared/helpers/language';
import { useTranslation } from 'react-i18next';


interface PropsType {
    children?: ReactNode;
    title: string;
    description?: string;
    required?: boolean;
}
const InputWrapper = (props:PropsType) => {
    const { i18n } = useTranslation(LOCALE_KEY);

    registerLocale(i18n, LOCALE_KEY, locale);

    return (
        <InputWrapperView {...{ 
            ...props
        }} />
    )
}

export default InputWrapper;
