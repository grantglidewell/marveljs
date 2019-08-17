import React, { useEffect, useState } from 'react';

// import useThanos from '../useThanos/index.js';

export default ({ children, appRoot }) => {
  const [root, updateRoot] = useState();
  useEffect(() => {
    const docRoot = document.getElementById(appRoot || 'root');
    updateRoot(docRoot);
  });
  const snap = () => root.remove();
  return (
    <>
      <button onClick={() => snap()}>snap</button>
      {children}
    </>
  );
};
