import React from 'react';
import './homepage.styles.scss';
import DirectoryComponent from "../../components/directory/directory.component";

const HomepageComponent = props => (
  <div className="homepage">
    <DirectoryComponent/>
  </div>
);

export default HomepageComponent;
