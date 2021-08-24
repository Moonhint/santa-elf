import locale from './locale';
import { useTranslation } from 'react-i18next';

const ProfessionalDetail = () => {
    //model
    const { t, i18n } = useTranslation('professionaldetail');

    // controllers
    i18n.addResourceBundle('en', 'professionaldetail', locale.en);
    i18n.addResourceBundle('id', 'professionaldetail', locale.id);

    return (
        <div>
            {t('namep')}
        </div>
    )
}

export default ProfessionalDetail;