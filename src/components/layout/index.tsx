import * as React from 'react';

import FooterComponent from './footer.component';
import HeaderComponent from './header';

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <>
      <HeaderComponent />
      <div>{children}</div>
      <FooterComponent />
    </>
  );
}
