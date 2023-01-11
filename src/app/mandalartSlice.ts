import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { RootState } from './store';

export interface MandalartState {
  theme: string;
  tutorialStep: number | undefined;
  title: string;
  goals: string[];
};

// todo: initialize data from server
const initialState: MandalartState = {
  theme: '',
  tutorialStep: undefined,
  title: '',
  goals: new Array(9).fill(''),
};

export interface OnChangeGoal {
  index: number,
  text: string,
};

export const mandalartSlice = createSlice({
  name: 'mandalart',
  initialState,
  reducers: {
    onChangeTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
    startTutorial: (state) => {
      state.tutorialStep = 0;
    },
    onNextTutorialStep: (state) => {
      if (!state.tutorialStep) {
        throw new Error('tutorialStep is undefined.');
      } else if (state.tutorialStep < 0 || state.tutorialStep > 2) {
        throw new Error('mandalart reducer\'s tutorial step is not in range.');
      } else if (state.tutorialStep === 2) {
        state.tutorialStep = undefined;
      } else {
        state.tutorialStep += 1;
      }
    },
    onPreviousTutorialStep: (state) => {
      if (!state.tutorialStep) {
        throw new Error('tutorial is undefined.');
      } else if (state.tutorialStep < 0 || state.tutorialStep > 2) {
        throw new Error('mandalart reducer\'s tutorial step is not in range.');
      } else {
        state.tutorialStep -= 1;
      }
    },
    onChangeTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    onChangeGoal: (state, action: PayloadAction<OnChangeGoal>) => {
      const { index, text } = action.payload;
      state.goals[index] = text;
    },
  },
});

export const {
  onChangeTheme,
  onNextTutorialStep,
  onPreviousTutorialStep,
  onChangeTitle,
  onChangeGoal,
} = mandalartSlice.actions;

export const selectTheme = (state: RootState) => state.theme;
export const selectTutorialStep = (state: RootState) => state.tutorialStep;
export const selectTitle = (state: RootState) => state.title;
export const selectGoals = (state: RootState) => state.goals;

export default mandalartSlice.reducer;