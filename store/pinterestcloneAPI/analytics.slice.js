import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_analytics_list = createAsyncThunk(
  "analytics/api_v1_analytics_list",
  async payload => {
    const response = await apiService.api_v1_analytics_list(payload)
    return response.data
  }
)
export const api_v1_analytics_create = createAsyncThunk(
  "analytics/api_v1_analytics_create",
  async payload => {
    const response = await apiService.api_v1_analytics_create(payload)
    return response.data
  }
)
export const api_v1_analytics_retrieve = createAsyncThunk(
  "analytics/api_v1_analytics_retrieve",
  async payload => {
    const response = await apiService.api_v1_analytics_retrieve(payload)
    return response.data
  }
)
export const api_v1_analytics_update = createAsyncThunk(
  "analytics/api_v1_analytics_update",
  async payload => {
    const response = await apiService.api_v1_analytics_update(payload)
    return response.data
  }
)
export const api_v1_analytics_partial_update = createAsyncThunk(
  "analytics/api_v1_analytics_partial_update",
  async payload => {
    const response = await apiService.api_v1_analytics_partial_update(payload)
    return response.data
  }
)
export const api_v1_analytics_destroy = createAsyncThunk(
  "analytics/api_v1_analytics_destroy",
  async payload => {
    const response = await apiService.api_v1_analytics_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const analyticsSlice = createSlice({
  name: "analytics",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_analytics_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_analytics_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_analytics_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_analytics_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_analytics_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_analytics_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_analytics_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_analytics_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_analytics_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_analytics_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_analytics_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_analytics_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_analytics_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_analytics_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_analytics_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_analytics_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_analytics_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_analytics_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_analytics_list,
  api_v1_analytics_create,
  api_v1_analytics_retrieve,
  api_v1_analytics_update,
  api_v1_analytics_partial_update,
  api_v1_analytics_destroy,
  slice: analyticsSlice
}
