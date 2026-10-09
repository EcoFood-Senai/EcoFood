export const USERS_KEY = 'ecofood:users'
export const SESSION_KEY = 'ecofood:session'
export const ALERT_KEY = 'ecofood:alerted'

export const foodsKey = (userId: string) => `ecofood:foods:${userId}`
export const historyKey = (userId: string) => `ecofood:history:${userId}`
