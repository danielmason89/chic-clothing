import React from 'react';
import Shop_Data from './Shop.data';
import CollectionPreview from '../../components/preview-collection/CollectionPreview.component';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: Shop_Data
            
        }
    }
    render () {
        const {collections} = this.state;
        return (<div className="shop-page">
        {
        collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))
        
        }
        </div>)
    }
}

export default ShopPage;