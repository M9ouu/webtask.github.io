const InisalValue = {
  count: 0,
};

const reduce = (state = InisalValue, action) => {
  if (action.type == "update") {
    return { ...state, count: state.count + 1 };
  }
  if (action.type == "unupdate") {
    if (state.count === 0) {
      return { ...state, count: 0 };
    }
    return { ...state, count: state.count - 1 };
  }

  return state;
};

export default reduce;
