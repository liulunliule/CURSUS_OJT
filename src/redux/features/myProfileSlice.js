import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserInfo = createAsyncThunk(
  "myProfile/fetchUserInfo",
  async () => {
    const response = await axios.get(
      "https://6696231a0312447373c1386e.mockapi.io/user"
    );
    return response.data;
  }
);

export const fetchUserPosts = createAsyncThunk(
  "myProfile/fetchUserPosts",
  async () => {
    const response = await axios.get(
      `https://6696231a0312447373c1386e.mockapi.io/course`
    );
    return response.data;
  }
);

export const fetchUpdateCourse = createAsyncThunk(
  "myProfile/fetchUpdateCourse",
  async ({ id, updatedData }) => {
    const response = await axios.put(
      `https://6696231a0312447373c1386e.mockapi.io/course/${id}`,
      updatedData
    );
    return response.data;
  }
);

export const fetchUserReviews = createAsyncThunk(
  "myProfile/fetchUserReviews",
  async () => {
    const response = await axios.get(
      `https://6696231a0312447373c1386e.mockapi.io/reviews`
    );
    return response.data;
  }
);

export const fetchPostComment = createAsyncThunk(
  "myProfile/fetchPostComment",
  async ({
    userId,
    content,
    avatar,
    replyTo,
    userName,
    replyToUserId,
    commentId,
  }) => {
    const commentData = {
      user: userName,
      userImage: avatar,
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString(),
      content,
      likes: 0,
      dislikes: 0,
      userId,
      replyTo,
      replyToUserId,
      commentId,
    };

    const response = await axios.post(
      `https://6696231a0312447373c1386e.mockapi.io/user/${userId}/reviews`,
      commentData
    );
    return response.data;
  }
);

export const fetchDeleteReview = createAsyncThunk(
  "myProfile/fetchDeleteReview",
  async ({ userId, reviewId }) => {
    await axios.delete(
      `https://6696231a0312447373c1386e.mockapi.io/user/${userId}/reviews/${reviewId}`
    );
    return { reviewId };
  }
);

export const fetchSubscriptions = createAsyncThunk(
  "myProfile/fetchSubscriptions",
  async () => {
    const response = await axios.get(
      `https://6696231a0312447373c1386e.mockapi.io/subscriptions`
    );
    return response.data;
  }
);

export const fetchUpdateSubscriptions = createAsyncThunk(
  "myProfile/fetchUpdateSubscriptions",
  async ({ id, updatedDataSubscriptions }) => {
    const response = await axios.put(
      `https://6696231a0312447373c1386e.mockapi.io/subscriptions/${id}`,
      updatedDataSubscriptions
    );
    return response.data;
  }
);

export const fetchUsers = createAsyncThunk(
  "mySearch/fetchUsers",
  async (query) => {
    const response = await axios.get(
      `https://6696231a0312447373c1386e.mockapi.io/user`,
      {
        params: { search: query },
      }
    );
    return response.data;
  }
);
export const fetchInstructor = createAsyncThunk(
  "myProfile/fetchInstructor",
  async (userId) => {
    const response = await axios.get(
      `https://6696231a0312447373c1386e.mockapi.io/user/${userId}`
    );
    return response.data;
  }
);
const myProfileSlice = createSlice({
  name: "myProfile",
  initialState: {
    userInfo: null,
    userPosts: [],
    userReviews: [],
    subscriptions: [],
    all_instructor: [],
    instructor: [],
    status: "idle",
    error: null,
  },
  reducers: {
    updateCourse: (state, action) => {
      const index = state.userPosts.findIndex(
        (course) => course.id === action.payload.id
      );
      if (index !== -1) {
        state.userPosts[index] = action.payload;
      }
    },
    updatedDataSubscriptions: (state, action) => {
      const index = state.subscriptions.findIndex(
        (chanel) => chanel.id === action.payload.id
      );
      if (index !== -1) {
        state.subscriptions[index] = action.payload;
      }
    },
    addReview: (state, action) => {
      const newComment = action.payload;
      if (newComment.replyTo) {
        const updateReplies = (comments, replyToId, newReply) => {
          return comments.map((comment) => {
            if (comment.id === replyToId) {
              return {
                ...comment,
                replies: [...(comment.replies || []), newReply],
              };
            } else if (comment.replies) {
              return {
                ...comment,
                replies: updateReplies(comment.replies, replyToId, newReply),
              };
            }
            return comment;
          });
        };

        state.userReviews = updateReplies(
          state.userReviews,
          newComment.replyTo,
          newComment
        );
      } else {
        state.userReviews.push(newComment);
      }
    },
    updateReview: (state, action) => {
      state.userReviews = state.userReviews.filter(
        (review) => review.id !== action.payload.reviewId
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserInfo.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchUserInfo.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userInfo = action.payload;
      })
      .addCase(fetchUserInfo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchUserPosts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchUserPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userPosts = action.payload;
      })
      .addCase(fetchUserPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchUserReviews.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchUserReviews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userReviews = action.payload;
      })
      .addCase(fetchUserReviews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchSubscriptions.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchSubscriptions.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.subscriptions = action.payload;
      })
      .addCase(fetchSubscriptions.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.all_instructor = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchUpdateCourse.fulfilled, (state, action) => {
        const index = state.userPosts.findIndex(
          (course) => course.id === action.payload.id
        );
        if (index !== -1) {
          state.userPosts[index] = action.payload;
        }
      })
      .addCase(fetchInstructor.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.instructor = action.payload;
      })
      .addCase(fetchUpdateSubscriptions.fulfilled, (state, action) => {
        const index = state.subscriptions.findIndex(
          (chanel) => chanel.id === action.payload.id
        );
        if (index !== -1) {
          state.subscriptions[index] = action.payload;
        }
      })
      .addCase(fetchPostComment.fulfilled, (state, action) => {
        const newComment = action.payload;
        if (newComment.replyTo) {
          const updateReplies = (comments, replyToId, newReply) => {
            return comments.map((comment) => {
              if (comment.id === replyToId) {
                return {
                  ...comment,
                  replies: [...(comment.replies || []), newReply],
                };
              } else if (comment.replies) {
                return {
                  ...comment,
                  replies: updateReplies(comment.replies, replyToId, newReply),
                };
              }
              return comment;
            });
          };

          state.userReviews = updateReplies(
            state.userReviews,
            newComment.replyTo,
            newComment
          );
        } else {
          state.userReviews.push(newComment);
        }
      })
      .addCase(fetchDeleteReview.fulfilled, (state, action) => {
        state.userReviews = state.userReviews.filter(
          (review) => review.id !== action.payload.reviewId
        );
      });
  },
});

export const {
  updateCourse,
  updatedDataSubscriptions,
  addReview,
  updateReview,
} = myProfileSlice.actions;

export default myProfileSlice.reducer;
