import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';
import { compose } from 'redux';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors'
import WithSpinner from '../../components/with-spinner/withSpinner.component';
import OverviewCollections from './OverviewCollections.component';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

const OverviewCollectionsContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(OverviewCollections);

export default OverviewCollectionsContainer;