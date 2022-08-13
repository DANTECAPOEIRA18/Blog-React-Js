import constants from './constants';

const initState = {
  listTags: [],
};

function tagsReducer(state = initState, { type, payload }) {

  switch (type) {

    case constants.LISTTAGS:
      return {
        ...state,
        listTags: payload,
      };
    default:
      return state;

  }

}

export default tagsReducer;
