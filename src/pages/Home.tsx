import { useState } from 'react';

import { useSelector } from 'react-redux';

import {
  Grid,
  Box,
  Typography,
} from '@mui/material';

import PageContainer from '../components/PageContainer';
import InputGrid from '../components/input/InputGrid';

import { HomePage } from '../fixtures/constants';

import { selectGoals, selectTheme, selectTitle, selectTutorialStep } from '../app/mandalartSlice';

function Home() {
  const theme = useSelector(selectTheme);
  const title = useSelector(selectTitle);
  const goals = useSelector(selectGoals);
  const tutorialSteps = useSelector(selectTutorialStep);

  const [clickedButtonNumber, setClickedButtonNumber] = useState<number | undefined>(undefined);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const onCloseModal = () => {
    setClickedButtonNumber(undefined);
    setIsModalOpen(false);
  };

  const onClickButton = (num: number) => {
    console.log(clickedButtonNumber, isModalOpen, num);

    if (!clickedButtonNumber && !isModalOpen) {
      setClickedButtonNumber(num);
      setIsModalOpen(true);
    }

    if (num === clickedButtonNumber && isModalOpen) {
      onCloseModal();
    }
  };

  const checkModalOpen = (buttonNumber: number) =>
    isModalOpen && (clickedButtonNumber === buttonNumber);

  return (
    <PageContainer>
      <Typography mt={4} sx={{ fontSize: '24px' }}>
        {title}
      </Typography>
      <Box mt={4} height={2} sx={{ backgroundColor: "#BFEADA" }} />
      <Grid
        container
        spacing={{ xs: 2 }}
        columns={{ xs: 3 }}
        sx={{
          backgroundColor: "#EAEBEA",
        }}
      >
        {
          Array.from(goals).map((goal, index) => (
            <InputGrid
              key={index}
              isModalOpen={checkModalOpen(index)}
              onClick={() => onClickButton(index)}
              onClose={onCloseModal}
              goal={goal}
            />
          ))
        }
      </Grid>
    </PageContainer >
  )
}

export default Home;