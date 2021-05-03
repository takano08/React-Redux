import  {createSelector} from 'reselect';

const usersSelector = (state) => state.users;

export const getUserid = createSelector(
    [usersSelector],
    state => state.uid

)