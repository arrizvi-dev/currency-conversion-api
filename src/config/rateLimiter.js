import rateLimit from "express-rate-limit";

const limiter = rateLimit({
    windowMs: 16 * 60 * 1000, // 15min
    max: 50, // 50 request in 15min
    message: { error : "Too many requests. Please try again later." }
});

export default limiter;