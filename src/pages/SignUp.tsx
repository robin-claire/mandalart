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

// import PageBox from 'components/PageBox';
import PageBox from '../components/PageBox';
// import DescButton from 'components/agreement/DescButon';
import DescButton from '../components/agreement/DescButon';

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
    <PageBox>
      <Grid container>
        <Grid item xs={12} mt={8}>
          <Typography variant='h2'>
            회원가입
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
                alignItems: 'flex-start',
              }}
            >
              <Typography variant='h6'>
                닉네임
              </Typography>
              <TextField
                margin="normal"
                fullWidth
                id="nickname"
                label="닉네임"
                aria-label="Email Address"
              />
              <Typography variant='h6'>
                이메일 (선택)
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                aria-label="Email Address"
              />
            </Box>
            <FormControlLabel
              sx={{ width: '100%' }}
              checked={false}
              control={<Checkbox value="all" color="primary" />}
              label={
                <Typography>전체 동의</Typography>
              }
            />
            <Divider />
            <FormControlLabel
              sx={{ width: '100%' }}
              checked={false}
              control={<Checkbox value="age" color="primary" />}
              label={
                <DescButton
                  isOpen={false}
                  onClose={() => { }}
                  title={'age'}
                  description={'age description'}
                />}
            />
            <FormControlLabel
              sx={{ width: '100%' }}
              checked={false}
              control={<Checkbox value="service" color="primary" />}
              label={
                <DescButton
                  isOpen={false}
                  onClose={() => { }}
                  title={'service'}
                  description={'service description'}
                />}
            />
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
    </PageBox>
  )
}

export default SignIn;