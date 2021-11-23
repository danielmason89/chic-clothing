import React from "react";
import MenuItem from "../menu-item/MenuItem.component";
import styled from "styled-components";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

const Directory = ({ sections }) => (
  <StyledDirectory>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </StyledDirectory>
);

const StyledDirectory = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
