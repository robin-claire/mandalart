import {
  Box,
  Modal,
  TextField,
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

type InputModalProps = {
  key: number;
  isModalOpen: boolean;
  onClose: (isOpen: boolean) => void;
  goal: string
}

function InputModal({
  key,
  isModalOpen,
  onClose,
  goal,
  onChange,
}: InputModalProps) {
  return (
    <Modal
      open={isModalOpen}
      onClose={onClose}
      aria-labelledby={`input modal ${key}`}
    >
      <Box sx={modalBoxStyle}>
        <h2>{key}번째 입력</h2>
        <TextField variant='outlined' value={goal} />
      </Box>
    </Modal >
  )
}

export default InputModal;