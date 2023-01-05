import React from 'react';

import { Container } from '@mui/material';

function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <Container maxWidth='xs'>
      {children}
    </Container>
  )
}

export default PageContainer;
