import { Box, Typography, Button } from '@mui/material';

import { purple } from '@mui/material/colors'

const color = purple[200];

function Home() {
  return (
    <Box
      sx={{
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: color
      }}
      minHeight="100vh" // todo: fix this
      maxWidth="414px"
    >
      <Box>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant='h2'>
            만다라트
          </Typography>
          <Typography variant='body1'>
            나만의 목표를 만들어요
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: 16
        }}
      >
        <Typography variant='h2'>왕멋진로고</Typography>
      </Box>
      <Box
        sx={{
          margin: '0 2',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Button>Google</Button>
        <Button>Kakao</Button>
      </Box>
    </Box >
  )
}

export default Home;