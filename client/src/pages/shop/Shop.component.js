import React, { useEffect, lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import BoundaryError from "../../components/error-boundary/BoundaryError.component";
import Spinner from "../../components/spinner/Spinner.component";
const CollectionPageContainer = lazy(() =>
  import("../collection/Collection.container")
);
const OverviewCollectionsContainer = lazy(() =>
  import("../../components/collections-overview/OverviewCollections.container")
);

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <BoundaryError>
        <Suspense fallback={<Spinner />}>
          <Route
            exact
            path={`${match.path}`}
            component={OverviewCollectionsContainer}
          />
          <Route
            path={`${match.path}/:collectionId`}
            component={CollectionPageContainer}
          />
        </Suspense>
      </BoundaryError>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
