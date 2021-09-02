import { Route, useRouteMatch } from "react-router-dom";
import React, { Suspense } from 'react';
import Sidebar from '@components/Sidebar';

const ProfessionalMembership = React.lazy(() => import('../ProfessionalMembership'));
const ProfessionalBusinessDetail = React.lazy(() => import('../ProfessionalBusinessDetail'));

const ProfessionalArea = () => {

    let { url, path } = useRouteMatch();
    
    return (
        <div>
            <Sidebar url={url}>
                <Route path={`${path}/membership`}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <ProfessionalMembership/>
                    </Suspense>
                </Route>
                <Route path={`${path}/professional-detail`}>
                    <Suspense fallback={<div>Loading</div>}>
                        <ProfessionalBusinessDetail/>
                    </Suspense>
                </Route>
                <Route path={`${path}/orders`}>
                    <div>Order</div>
                </Route>
                <Route path={`${path}/services`}>
                    <div>Services</div>
                </Route>
                <Route path={`${path}/create-service`}>
                    <div>Create Service</div>
                </Route>
                <Route exact path={path}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <ProfessionalMembership/>
                    </Suspense>
                </Route>
            </Sidebar>
        </div>
    )
}

export default ProfessionalArea;
