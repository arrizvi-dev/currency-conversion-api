import { getExchangeRate } from "../services/exchangeService.js";
import logger from "../config/logger.js";

export const convertCurrency = async (req, res) => {
    const { from, to, amount } = req.query;

    if (!from || !to || !amount || isNaN(amount)) {
        logger.error("Invalid query parameters");
        return res.status(400).json({ error: "Invalid parameters. Example: /convert?from=USD&to=EUR&amount=100" });
    }

    try {
        const { rate, source } = await getExchangeRate(from, to);
        const convertedAmount = (amount * rate).toFixed(2);

        res.json({ from, to, amount, convertedAmount, rate, source });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
