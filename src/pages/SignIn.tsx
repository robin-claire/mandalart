import {
  Grid,
  Box,
  Typography,
  TextField,
  FormControlLabel,
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
            만다라트
          </Typography>
        </Grid>
      </Grid>
    </PageBox>
  )
}

export default SignIn;