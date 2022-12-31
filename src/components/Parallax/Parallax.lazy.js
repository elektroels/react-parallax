import React, { lazy, Suspense } from 'react';

const LazyParallax = lazy(() => import('./Parallax'));

const Parallax = props => (
  <Suspense fallback={null}>
    <LazyParallax {...props} />
  </Suspense>
);

export default Parallax;
