import {
  Grid,
  Typography,
} from '@mui/material';

import PageContainer from '../components/PageContainer';

function AboutMandalart() {
  return (
    <PageContainer>
      <Grid container>
        <Grid item xs={12} mt={8}>
          <Typography variant='h2'>
            About Mandalart
          </Typography>
        </Grid>
      </Grid>
    </PageContainer>
  )
}

export default AboutMandalart;