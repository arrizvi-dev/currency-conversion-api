import axios from "axios";
import logger from "../config/logger.js";
import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.EXCHANGE_RATE_API_KEY;
const BASE_URL = process.env.EXCHANGE_RATE_API_URL;

export const getExchangeRate = async (from, to) => {
    try {
        // Fetch from Exchange API
        const response = await axios.get(`${BASE_URL}/${API_KEY}/latest/${from.toUpperCase()}`);
        const rate = response.data.conversion_rates[to.toUpperCase()];

        if (!rate) {
            logger.error("Invalid currency code.");
            throw new Error("Invalid currency code.");
        }

        logger.info(`Fetched rate for ${from} to ${to} from API`);

        return { rate };
    } catch (error) {
        logger.error(`Error fetching exchange rate: ${error.message}`);
        throw new Error("Failed to fetch exchange rate.");
    }
};
