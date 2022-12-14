import { Typography, Button } from '@mui/material';

import { CenterBox, PageBox } from '../components/customs/Box';

function Home() {
  console.log(CenterBox)

  return (
    <PageBox>
      <CenterBox>
        <Typography variant='h2'>
          만다라트
        </Typography>
        <Typography variant='body1'>
          나만의 목표를 만들어요
        </Typography>
      </CenterBox>
      <CenterBox>
        <Typography variant='h2'>왕멋진로고</Typography>
      </CenterBox>
      <CenterBox>
        <Button>Google</Button>
        <Button>Kakao</Button>
      </CenterBox>
    </PageBox>
  )
}

export default Home;