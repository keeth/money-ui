import { combineReducers } from 'redux'
import { reducer as formReducer, actionTypes as fat } from 'redux-form';

export default function getReducer (client) {
  return combineReducers({
    apollo: client.reducer(),
    form: formReducer.plugin({
      cc: (state, action) => {
        switch (action.type) {
          case fat.CHANGE:
            if (action.meta.field === 'country') {
              return {
                ...state,
                values: {
                  ...state.values,
                  state: undefined
                },
                fields: {
                  ...state.fields,
                  state: undefined
                }
              };
            } else {
              return state;
            }
          default:
            return state
        }
      }
    })
  })
}
