import { Typography, Button, Grid } from '@mui/material';

import { PageBox } from '../components/PageBox';

function Home() {
  return (
    <PageBox>
      <Grid container>
        <Grid item xs={12} mt={8}>
          <Typography variant='h2'>
            만다라트
          </Typography>
          <Typography variant='body1'>
            나만의 목표를 만들어요
          </Typography>
        </Grid>
        <Grid item xs={12} mt={8}>
          <Typography variant='h2'>왕멋진로고</Typography>
        </Grid>
        <Grid item xs={12} mt={8} p={4}>
          <Button variant='outlined' fullWidth>
            Google로 로그인
          </Button>
          <Button variant='outlined' fullWidth sx={{ mt: 2 }}>
            Kakao로 로그인
          </Button>
          <Button variant='outlined' fullWidth sx={{ mt: 2 }}>
            이메일로 로그인
          </Button>
        </Grid>
      </Grid>
    </PageBox >
  )
}

export default Home;