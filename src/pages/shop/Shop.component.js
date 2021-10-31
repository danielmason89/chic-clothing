import React from 'react';
import { Route } from 'react-router-dom';

import CollectionPage from '../collection/Collection.component';
import OverviewCollections from '../../components/collections-overview/OverviewCollections.component';


const ShopPage = ({ match }) => (
        <div className="shop-page">
        <Route exact path={`${match.path}`} component={OverviewCollections} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
);


export default ShopPage;