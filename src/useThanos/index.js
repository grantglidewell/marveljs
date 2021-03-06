import { useEffect, useState } from 'react';

export default (appRoot = 'root') => {
  const [root, updateRoot] = useState();
  useEffect(() => {
    const docRoot = document.getElementById(appRoot);
    updateRoot(docRoot);
  });
  const snap = () => root.remove();
  return [snap];
};
