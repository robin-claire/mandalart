import {
  Grid,
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Divider,
  Checkbox,
  Button,
} from '@mui/material';

// import PageContainer from 'components/PageContainer';
import PageContainer from '../components/PageContainer';
// import DescButton from 'components/agreement/DescButon';
import DescButton from '../components/agreement/DescButon';

import { SignUpPage } from '../fixtures/constants';

function SignIn() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <PageContainer>
      <Grid container>
        <Grid item xs={12} mt={8}>
          <Typography variant='h2'>
            {SignUpPage.title}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1, p: 4 }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {
                [SignUpPage.inputs.nickName, SignUpPage.inputs.email].map(({ id, title }) => (
                  <div key={id}>
                    <Typography variant='h6' align='left'>
                      {title}
                    </Typography>
                    <TextField
                      margin="normal"
                      fullWidth
                      id={id}
                      label={id}
                      aria-label={id}
                    />
                  </div>
                ))
              }
            </Box>
            <FormControlLabel
              sx={{ width: '100%' }}
              checked={false}
              control={<Checkbox value="all" color="primary" />}
              label={
                <Typography>{SignUpPage.buttons.agreeAll.title}</Typography>
              }
            />
            <Divider />
            {
              [SignUpPage.buttons.agreeAge, SignUpPage.buttons.agreeUsage].map(({ title, description }) => (
                <FormControlLabel
                  sx={{ width: '100%' }}
                  checked={false}
                  key={title}
                  control={<Checkbox value={title} color="primary" />}
                  label={
                    <DescButton
                      isOpen={false}
                      onClose={() => { }}
                      title={title}
                      description={description}
                    />}
                />
              ))
            }
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              계정 만들기
            </Button>
          </Box>
        </Grid>
      </Grid>
    </PageContainer>
  )
}

export default SignIn;