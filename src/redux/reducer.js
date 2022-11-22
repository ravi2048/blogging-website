import { combineReducers, createSlice } from "@reduxjs/toolkit";

const sampleHTMLDesc = `
<p>
  Contrary to popular belief, Lorem Ipsum is not simply random text.
  It has roots in a piece of classical Latin literature from 45 BC,
  making it over 2000 years old. Richard McClintock, a Latin
  professor at Hampden-Sydney College in Virginia, looked up one of
  the more obscure Latin words, consectetur, from a Lorem Ipsum
  passage, and going through the cites of the word in classical
  literature, discovered the undoubtable source. Lorem Ipsum comes
  from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
  Malorum" (The Extremes of Good and Evil) <br/><br/>By Cicero, written in 45
  BC. This book is a treatise on the theory of ethics, very popular
  during the Renaissance. The first line of Lorem Ipsum, "Lorem
  ipsum dolor sit amet..", comes from a line in section 1.10.32. The
  standard chunk of Lorem Ipsum used since the 1500s is reproduced
  below for those interested. Sections 1.10.32 and 1.10.33 from "de
  Finibus Bonorum et Malorum" by Cicero are also reproduced in their
  exact original form, accompanied by English versions from the 1914
  translation by H. Rackham ontrary to popular belief, Lorem Ipsum
  is not simply random text.<br/><br/> It has roots in a piece of classical
  Latin literature from 45 BC, making it over <b>2000</b> years old.
  Richard McClintock, a Latin professor at Hampden-Sydney College in
  Virginia, looked up one of the more obscure Latin words,
  consectetur, from a Lorem Ipsum passage, and going through the
  cites of the word in classical literature, discovered the
  undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
  1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
  and Evil) by Cicero, written in 45 BC. This book is a treatise on
  the theory of ethics, very popular during the Renaissance. The
  first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
  from a line in section 1.10.32. The standard chunk of Lorem Ipsum
  used since the 1500s is reproduced below for those interested.
  Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
  by Cicero are also reproduced in their exact original form,
  accompanied by English versions from the 1914 translation by H.
  Rackham
</p>`;

export const postSlice = createSlice({
  name: "posts",
  initialState: [
    {
      id: 1,
      title: "Sample 1 lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: sampleHTMLDesc,
      img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      title: "Sample 2 lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: sampleHTMLDesc,
      img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      title: "Sample 3 lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: sampleHTMLDesc,
      img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 4,
      title: "Sample 4 lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: sampleHTMLDesc,
      img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ],
  reducers: {
    addPost: (state, action) => {
      const newPost = {
        id: state.length + 1,
        title: action.payload.title,
        desc: action.payload.desc,
        img: action.payload.img,
      };

      return [...state, newPost];
    },
    updatePost: (state, action) => {
      const postIdToBeUpdated = action.payload.id;
      return state.map((post, idx) => {
        if (idx !== postIdToBeUpdated - 1) {
          return post;
        } else {
          return {
            ...post,
            ...action.payload,
          };
        }
      });
    },
    deletePost: (state, action) => {
      return state.filter((post, idx) => idx !== action.payload - 1);
    },
  },
});

export const alertSlice = createSlice({
  name: "alert",
  initialState: {
    alert: "",
  },
  reducers: {
    setAlert: (state, action) => {
      return {
        ...state,
        alert: action.payload,
      };
    },
  },
});
export const { addPost, updatePost, deletePost } = postSlice.actions;
export const { setAlert } = alertSlice.actions;

const reducerComm = combineReducers({
  posts: postSlice.reducer,
  alert: alertSlice.reducer,
});

export default reducerComm;
