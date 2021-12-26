import locale from './locale';
import ProfessionalListView from './view';
// import useProfession from '@/apis/useProfession';
import { LOCALE_KEY } from './const';
import { registerLocale } from '@/shared/helpers/language';
import { useTranslation } from 'react-i18next';

const ProfessionalList = () => {
    // const { professions, isLoadingDataProfessions, getAllProfessions } = useProfession();
    // const { professionals, isLoadingProfessionals, getAllProfessionals } = useProfessional();
    const { i18n } = useTranslation(LOCALE_KEY);

    registerLocale(i18n, LOCALE_KEY, locale);


    const tabChanged = (tab:string) => {
        console.log(tab)
    }

    return (
        <ProfessionalListView 
            // professions={professions} 
            // isLoadingDataProfessions={isLoadingDataProfessions}
            // professionals={professionals} 
            // isLoadingProfessionals={isLoadingProfessionals}
            tabChanged={tabChanged}
        />
    )
}

export default ProfessionalList;
