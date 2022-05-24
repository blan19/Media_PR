import React from 'react';
import { Scroll, ScrollControls } from '@react-three/drei';

const Contents = () => {
  return (
    <ScrollControls pages={3}>
      <Scroll></Scroll>
    </ScrollControls>
  );
};

export default Contents;
