// const userDetailsSlice = createSlice({
//   name: "userDetails",
//   initialState,
//   reducers: {},
//   extraReducers: {
//     [CreateUsers.pending]: (state) => {
//       state.loading = true;
//     },
//     [CreateUsers.fulfilled]: (state, action) => {
//       state.loading = false;
//       state.users.push(action.payload);
//     },
//     [CreateUsers.rejected]: (state, action) => {
//       state.loading = false;
//       state.users = action.payload;
//     },
//     [showUser.pending]: (state) => {
//       state.loading = true;
//     },
//     [showUser.fulfilled]: (state, action) => {
//       state.loading = false;
//       state.users = action.payload;
//     },
//     [showUser.rejected]: (state, action) => {
//       state.loading = false;
//       state.users = action.payload;
//     },
//   },
// });

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const CreateUsers = createAsyncThunk(
  "createuser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://650b2c8bdfd73d1fab09b921.mockapi.io/userdetails",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        return response.data;
      } else {
        return rejectWithValue("Failed to create a new user.");
      }
    } catch (error) {
      return rejectWithValue("An error occurred while creating a new user.");
    }
  }
);

export const showUser = createAsyncThunk(
  "showuser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://650b2c8bdfd73d1fab09b921.mockapi.io/userdetails"
      );
      if (response.status === 200) {
        return response;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// delete user

export const deleteUser = createAsyncThunk(
  "deleteuser",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `https://650b2c8bdfd73d1fab09b921.mockapi.io/userdetails/${id}`
      );
      if (response.status === 200) {
        return response;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// update user
export const UpdateUsers = createAsyncThunk(
  "updateusers",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `https://650b2c8bdfd73d1fab09b921.mockapi.io/userdetails/${data.id}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        return response.data;
      } else {
        return rejectWithValue("Failed to create a new user.");
      }
    } catch (error) {
      return rejectWithValue("An error occurred while creating a new user.");
    }
  }
);

const initialState = {
  users: [],
  loading: false,
  error: null,
  search: [],
};

const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    searchDatas: (state, action) => {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(CreateUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(CreateUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(CreateUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(showUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(showUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload.data;
        // state.users = state.users.concat(action.payload.data);
      })
      .addCase(showUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        const { id } = action.payload.data;
        if (id) {
          state.users = state.users.filter((data) => {
            return data.id !== id;
          });
        }
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(UpdateUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(UpdateUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.map((data) => {
          return data.id === action.payload.id ? action.payload : data;
        });
      })
      .addCase(UpdateUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userDetailsSlice.reducer;

export const { searchDatas } = userDetailsSlice.actions;
// https://650b2c8bdfd73d1fab09b921.mockapi.io/userdetails
