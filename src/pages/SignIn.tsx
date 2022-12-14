import {
  Grid,
  Typography,
  Box,
  Button,
} from '@mui/material';

import { SignInPage } from '../fixtures/constants';
//import { SignInPage } from 'fixtures/constants';

// import PageBox from 'components/PageBox';
import PageBox from '../components/PageBox';

function SignIn() {
  const { description } = SignInPage;
  const { platform, text } = SignInPage.buttons;

  return (
    <PageBox>
      <Grid container>
        <Grid item xs={12} mt={8}>
          <Typography variant='h2'>
            {SignInPage.title}
          </Typography>
          {
            description.map((text) => (
              <Typography key={text} variant='h4'>
                {text}
              </Typography>
            ))
          }
          <Box
            sx={{

              p: 4,
            }}>
            {
              platform.map(({ title, color, icon }) => (
                <Button sx={{ mt: 2, backgroundColor: color.container }} fullWidth key={title} variant="contained" startIcon={icon}>
                  {title}{text}
                </Button>
              ))
            }
          </Box>
        </Grid>
      </Grid>
    </PageBox>
  );
}

export default SignIn;