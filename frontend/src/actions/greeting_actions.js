export const PROMPT_LOGIN = 'PROMPT_LOGIN';
export const CLOSE_LOGIN_PROMPT = 'CLOSE_LOGIN_PROMPT';
export const SET_PROMO_BANNER = 'SET_PROMO_BANNER';
export const CLSOE_PROMO_BANNER = 'CLSOE_PROMO_BANNER';

export const promptLogin = () => ({
  type: PROMPT_LOGIN
});

export const closeLoginPrompt = () => ({
  type: CLOSE_LOGIN_PROMPT
});

export const setPromoBanner = () => ({
  type: SET_PROMO_BANNER 
});

export const closePromoBanner = () => ({
  type: CLSOE_PROMO_BANNER 
});
