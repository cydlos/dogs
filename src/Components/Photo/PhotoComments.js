import React from 'react';
import {UserContext} from '../../UserContext';

const PhotoComments = () => {
  const {login} = React.useContext(UserContext);
  return <div>
    PhotoComments
    </div>;
};

export default PhotoComments;
