import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IServiceContent from 'shared/interfaces/Service/IServiceOptionContent';
import serviceData from 'data/serviceData.json';

interface ServiceState {
  selectedOption: string;
  selectedContent: IServiceContent | null;
}

const initialState: ServiceState = {
  selectedOption: '',
  selectedContent: null,
};

const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {
    selectOption: (state, action: PayloadAction<string>) => {
      state.selectedOption = action.payload;
      state.selectedContent = serviceData.optionsContent.find(
        (option) => option.title === action.payload
      ) || null;
    },
  },
});

export const { selectOption } = serviceSlice.actions;

export default serviceSlice.reducer;