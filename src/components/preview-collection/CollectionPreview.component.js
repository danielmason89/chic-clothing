import React from 'react'
import styled from 'styled-components';
import ItemsCollection from '../items-collection/ItemsCollection.component';

const CollectionPreview = ({ title, items }) => {
    return (
        <StyledCollectionPreview>
            <StyledTitle>{title.toUpperCase()}</StyledTitle>
            <StyledPreview>
                {items
                .filter((item, idx) => idx < 4)
                .map(({ id, ...otherItemProps}) => (
                    <ItemsCollection key={id} {...otherItemProps} />
                ))}
            </StyledPreview>
        </StyledCollectionPreview>
    );
}

const StyledCollectionPreview = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    .preview {
      display: flex;
      justify-content: space-between;
    }
`;

const StyledTitle = styled.h1`
      font-size: 28px;
      margin-bottom: 25px;
`;

const StyledPreview = styled.div`
      display: flex;
      justify-content: space-between;
`;

export default CollectionPreview;
