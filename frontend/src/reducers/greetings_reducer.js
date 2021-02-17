import { 
  PROMPT_LOGIN,
  CLOSE_LOGIN_PROMPT,
  SET_PROMO_BANNER,
  CLSOE_PROMO_BANNER
} from '../actions/greeting_actions';

const initialState = { promptLogin: false, promoBanner: true }

const greetingsReducer = (state = initialState, action) => {
  switch(action.type) {
    case PROMPT_LOGIN:
      return Object.assign({}, state, { promptLogin: true });
    case CLOSE_LOGIN_PROMPT:
      return Object.assign({}, state, { promptLogin: false });
    case SET_PROMO_BANNER:
      return Object.assign({}, state, { promoBanner: true });
    case CLSOE_PROMO_BANNER:
      return Object.assign({}, state, { promoBanner: false });
    default:
      return state;
  }
}

export default greetingsReducer;