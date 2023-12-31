import * as winston from "winston";

const options: winston.LoggerOptions = {
    transports: [
        new winston.transports.Console({
            level: process.env.NODE_ENV === "production" ? "error" : "debug"
        }),
        new winston.transports.File({ filename: "./debug.log", level: "debug" })
    ]
};

export const logger = winston.createLogger(options);