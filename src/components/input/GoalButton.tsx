import {
  IconButton,
  Button,
} from '@mui/material';

import {
  Add,
} from '@mui/icons-material';

type GoalButtonProps = {
  isCoreGoal: boolean;
  goal: string;
  onClick: () => void;
}

const GoalButton = ({
  isCoreGoal,
  goal,
  onClick,
}: GoalButtonProps) => {
  if (goal === '') {
    return (
      <IconButton
        sx={{
          borderstyle: 'dashed',
          backgroundColor: `${isCoreGoal ? '' : ''}`,
        }}
        onClick={onClick}
      >
        {
          isCoreGoal
            ? '핵심목표 추가'
            : <Add />
        }
      </IconButton>
    )
  } else {
    return (
      <Button
        sx={{
          backgroundColor: `${isCoreGoal ? '' : ''}`,
        }}
        onClick={onClick}
      >
        {goal}
      </Button>
    )
  }
}

export default GoalButton;