import express from "express";
import cors from "cors";
import limiter from "./config/rateLimiter.js";
import currencyRoutes from "./routes/currency.route.js";
import logger from "./config/logger.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(limiter);

// Routes
app.use("/api", currencyRoutes);

// Error Handling
app.use((err, req, res, next) => {
    logger.error(err.message);
    res.status(500).json({ error: "Internal Server Error" });
});

export default app;
