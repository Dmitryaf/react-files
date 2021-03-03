const SET_FILES = 'SET_FILES';
const SET_CURRENT_DIR = 'SET_CURRENT_DIR';

const initialState = {
  files: [],
  currentDir: null,
};

export default function fileReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FILES:
      return {
        ...state,
        files: action.payload,
      };

    case SET_CURRENT_DIR:
      return {
        ...state,
        currentDir: action.payload,
      };
    default:
      return state;
  }
}

export const setFiles = (files) => {
  return {
    type: SET_FILES,
    payload: files,
  };
};

export const setCurrentDir = (dir) => {
  return {
    type: SET_FILES,
    payload: dir,
  };
};
