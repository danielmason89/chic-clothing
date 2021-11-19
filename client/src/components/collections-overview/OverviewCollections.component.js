import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import styled from "styled-components";
// Components
import CollectionPreview from "../preview-collection/CollectionPreview.component";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

const OverviewCollections = ({ collections }) => (
  <StyledOverViewCollections>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </StyledOverViewCollections>
);

const StyledOverViewCollections = styled.div`
  display: flex;
  flex-direction: column;
`;

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(OverviewCollections);
