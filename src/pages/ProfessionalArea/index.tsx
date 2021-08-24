// import useNavbarState from './states';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import ProfessionalAreaView from './view';
// import locale from './locale';
// import { useTranslation } from 'react-i18next';
import Sidebar from '@components/Sidebar';
// import useCurrentLanguage from '@shared/hooks/useCurrentLanguage';

// Have 4 children (Membership, Business Detail, Orders, Services)
const ProfessionalArea = () => {

    // model

    // controller

    return (
        <Router>
            <Sidebar/>
            <Switch>
                <Route path="/membership">
                    <div>Membership</div>
                </Route>
                <Route path="/professional-detail">
                    <div>Business Detail</div>
                </Route>
                <Route path="/orders">
                    <div>Orders</div>
                </Route>
                <Route path="/orders">
                    <div>Services</div>
                </Route>
            </Switch>
        </Router>
    )
}

export default ProfessionalArea;

