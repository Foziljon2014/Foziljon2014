import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {

  },
});

export const { addUser, deleteUser, editUser } = userSlice.actions;
export default userSlice.reducer;
