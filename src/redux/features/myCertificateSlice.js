import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCertificates = createAsyncThunk(
  "certificate/fetchCertificates",
  async (userId) => {
    const response = await axios.get(
      `https://6696231a0312447373c1386e.mockapi.io/user/${userId}/certificate`
    );
    return response.data;
  }
);

// Uncomment the following code if you want to enable the delete certificate functionality

// export const fetchDeleteMyCertificate = createAsyncThunk(
//   "certificate/fetchDeleteMyCertificate",
//   async (id, { dispatch }) => {
//     await axios.delete(
//       `https://6690897fc0a7969efd9c6a33.mockapi.io/MyCertificate/${id}`
//     );
//     dispatch(deleteCertificate(id));
//   }
// );

export const fetchUpdateMyCertificate = createAsyncThunk(
  "myProfile/fetchUpdateMyCertificate",
  async ({ id, UpdateMyCertificate, userId }) => {
    const response = await axios.put(
      `https://6696231a0312447373c1386e.mockapi.io/user/${userId}/certificate/${id}`,
      UpdateMyCertificate
    );
    return response.data;
  }
);

const certificateSlice = createSlice({
  name: "certificate",
  initialState: {
    mycertificate: [],
    status: "idle",
    error: null,
  },
  reducers: {
    // Uncomment the following code if you want to enable the delete certificate functionality

    // deleteCertificate: (state, action) => {
    //   state.mycertificate = state.mycertificate.filter(
    //     (certificate) => certificate.id !== action.payload
    //   );
    // },
    UpdateMyCertificate: (state, action) => {
      const index = state.mycertificate.findIndex(
        (certificate) => certificate.id === action.payload.id
      );
      if (index !== -1) {
        state.mycertificate[index] = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCertificates.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCertificates.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.mycertificate = action.payload;
      })
      .addCase(fetchCertificates.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchUpdateMyCertificate.fulfilled, (state, action) => {
        const index = state.mycertificate.findIndex(
          (certificate) => certificate.id === action.payload.id
        );
        if (index !== -1) {
          state.mycertificate[index] = action.payload;
        }
      });
  },
});

export const { UpdateMyCertificate } = certificateSlice.actions;

export default certificateSlice.reducer;
