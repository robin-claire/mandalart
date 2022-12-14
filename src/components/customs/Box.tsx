import { Box } from '@mui/material';
import { purple } from '@mui/material/colors'

const BACKGROUNDCOLOR = purple[200];

export function CenterBox({ children }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      marginTop={16} // todo: fix this
    >
      {children}
    </Box>
  )
}

export function PageBox({ children }) {
  return (
    <Box sx={{
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      maxWidth: '414px', // ios se 에 맞춘 maxWidth
      minHeight: '100vh', // todo: fix this
      backgroundColor: BACKGROUNDCOLOR,
    }}>
      {children}
    </Box>
  )
}