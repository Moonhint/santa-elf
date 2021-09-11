import { Route, useRouteMatch } from "react-router-dom";
import React, { Suspense } from 'react';
import Sidebar from '@components/Sidebar';

const ProfessionalMembership = React.lazy(() => import('./ProfessionalMembership'));
const ProfessionalBusinessDetail = React.lazy(() => import('./ProfessionalBusinessDetail'));
const ProfessionalServiceList = React.lazy(() => import('./ProfessionalServiceList'));
const ProfessionalServiceCreate = React.lazy(() => import('./ProfessionalServiceCreate'));
const ProfessionalServiceEdit = React.lazy(() => import('./ProfessionalServiceEdit'));

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
                    <Suspense fallback={<div>Loading</div>}>
                        <ProfessionalServiceList/>
                    </Suspense>
                </Route>
                <Route path={`${path}/create-service`}>
                    <Suspense fallback={<div>Loading</div>}>
                        <ProfessionalServiceCreate/>
                    </Suspense>
                </Route>
                <Route path={`${path}/edit-service/:id`}>
                    <Suspense fallback={<div>Loading</div>}>
                        <ProfessionalServiceEdit/>
                    </Suspense>
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
