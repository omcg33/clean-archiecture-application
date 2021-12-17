import { ENV } from "./env";

export const CONFIG = {    
    NODE_TLS_REJECT_UNAUTHORIZED: ENV.NODE_TLS_REJECT_UNAUTHORIZED,

    HOST: ENV.HOST,
    PORT: ENV.PORT,
    BASE_PATH: ENV.BASE_PATH,

    CATS_SERVICE: ENV.CATS_SERVICE,
    DOGS_SERVICE: ENV.DOGS_SERVICE,
} as const;