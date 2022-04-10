// A reducer is a function that accept a state and an action
// The action will determine which set of logic will proceed

export default (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];
        default:
            return posts;
    }
};
// used in combineReducers ./index.js