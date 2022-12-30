import {
  Box,
  Modal,
  Typography,
} from '@mui/material';

const modalBoxStyle = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type DescModalProps = {
  isOpen: boolean;
  onClose: (isOpen: boolean) => void;
  title: string;
  description: string;
}

function DescModal({ isOpen, onClose, title, description }: DescModalProps) {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby={`${title}`}
      aria-describedby={`${description}`}
    >
      <Box sx={modalBoxStyle}>
        <Typography id={`${title}`} variant="h6" component="h2">
          {title}
        </Typography>
        <Typography id={`${description}`} sx={{ mt: 2 }}>
          {description}
        </Typography>
      </Box>
    </Modal >
  )
}

export default DescModal;