import {
  Grid,
  Typography,
} from '@mui/material';

import PageBox from '../components/PageBox';

function AboutDevelopers() {
  return (
    <PageBox>
      <Grid container>
        <Grid item xs={12} mt={8}>
          <Typography variant='h2'>
            About Developers
          </Typography>
        </Grid>
      </Grid>
    </PageBox>
  )
}

export default AboutDevelopers;