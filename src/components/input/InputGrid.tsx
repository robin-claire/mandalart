import {
  Grid,
} from '@mui/material';

import GoalButton from './GoalButton';
import InputModal from './InputModal';

type InputGridProps = {
  key: number;
  isModalOpen: boolean;
  onClick: () => void;
  onClose: () => void;
  goal: string;
}

function InputGrid({
  key,
  isModalOpen,
  onClick,
  onClose,
  goal,
}: InputGridProps) {
  return (
    <Grid item xs={1} key={key}>
      <GoalButton
        isCoreGoal={key === 4}
        goal={goal}
        onClick={onClick}
      />
      <InputModal
        key={key}
        isModalOpen={isModalOpen}
        onClose={onClose}
        goal={goal}
      />
    </Grid>
  )
}

export default InputGrid;