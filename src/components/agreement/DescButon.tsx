import {
  Box,
  Typography,
  Button,
} from '@mui/material';

import DescModal from './DescModal';

type DescButtonProps = {
  isOpen: boolean,
  onClose: () => void,
  title: string,
  description: string
}

function DescButton({ isOpen, onClose, title, description }: DescButtonProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <Typography>(필수)</Typography>
      <Button variant="text">{title}</Button>
      <DescModal
        isOpen={isOpen}
        onClose={onClose}
        title={title}
        description={description}
      />
    </Box>
  )
}

export default DescButton;