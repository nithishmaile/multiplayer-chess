import { createSlice, createAsyncThunk } from "@reduxjs/toolkits";
import { api } from "../api/client";

const initialState = {
  user: null,
  status: "idle", // 'idle' | 'succes' | 'pending' | 'error'
  error: null,
};

export const login = createAsyncThunk(
  "auth/login",
  async ({ username, password }, thunkAPI) => {
    try {
      // axios
      const res = await api.post("/auth/login", { username, password });
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message || "Login failed");
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase();
  },
});

const authReducer = authSlice.reducer;
export { authReducer };
