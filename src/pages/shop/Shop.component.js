import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionPage from '../collection/Collection.component';
import OverviewCollections from '../../components/collections-overview/OverviewCollections.component';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import  WithSpinner from '../../components/with-spinner/withSpinner.component';
import { updateCollections } from '../../redux/shop/shop.actions';

const OverviewCollectionsWithSpinner = WithSpinner(OverviewCollections);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
        state = { loading: true };
        unsubscribeFromSnapshot = null;

        componentDidMount() {
                const { updateCollections } = this.props;
                const collectionRef = firestore.collection('collections');

                collectionRef.get().then(snapshot => {
                        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
                        updateCollections(collectionsMap);
                        this.setState({loading: false});
                        });
        }

        render () {
        const { match } = this.props;
        const { loading } = this.state;
                return (
                        <div className='shop-page'>
                        <Route exact path={`${match.path}`} render={props => (<OverviewCollectionsWithSpinner isLoading={loading} {...props}/>)} />
                        <Route path={`${match.path}/:collectionId`} render={props => (<CollectionPageWithSpinner isLoading={loading} {...props}/>)} />
                        </div>
                );
        }
} 

const mapDispatchToProps = dispatch => ({
        updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);