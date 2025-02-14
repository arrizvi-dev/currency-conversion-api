# Currency Conversion API

A simple Currency Conversion API built with **Node.js (v20+)** and **Express.js**, integrating a third-party exchange rate API. The API provides currency conversion functionality based on live exchange rates.

## Features

- Convert currency amounts in real-time.
- Uses **Express.js** for routing.
- Implements **Rate Limiting** to prevent abuse.
- Includes **Winston Logging** for error and request tracking.
- **Environment Variables** for API keys and configurations.

## Technologies Used

- **Node.js 20+**
- **Express.js**
- **Axios** (for API calls)
- **Rate Limiting** (Express Rate Limit)
- **Winston Logger** (for logging errors and requests)
- **dotenv** (for managing environment variables)

## Prerequisites

Ensure you have the following installed:

- [Node.js (v20+)](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Setup & Installation

### 1. Clone the repository

```sh
git clone https://github.com/your-username/currency-conversion-api.git
cd currency-conversion-api
```

### 2. Install dependencies

```sh
npm install
```

### 3. Create a `.env` file

Create a `.env` file in the root of the project and add the following:

```env
PORT=5002   
EXCHANGE_RATE_API_URL=https://v6.exchangerate-api.com/v6/
EXCHANGE_RATE_API_KEY=your_api_key_here
```

Replace `your_api_key_here` with your actual API key.

### 4. Start the server

```sh
npm start
```

The server will start on `http://localhost:5002`

## API Endpoints

### Convert Currency

**GET** `/api/convert?from=USD&to=EUR&amount=100`

#### Request Parameters:

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| from      | string | Source currency (e.g., USD) |
| to        | string | Target currency (e.g., EUR) |
| amount    | number | Amount to convert           |

#### Example Response:

```json
{
  "from": "USD",
  "to": "EUR",
  "amount": 100,
  "convertedAmount": "92.50",
  "rate": 0.925,
  "source": "API"
}
```

## Assumptions

- The API uses `https://v6.exchangerate-api.com/` as the exchange rate provider.
- The cache layer (Redis) has been removed for simplicity.
- The API only supports conversion between currencies available in the exchange rate provider.

## Logging

- Logs are stored in `error.log` and `combined.log`.
- Errors are logged using **Winston**.

## License

This project is licensed under the MIT License.

## Author

- **Muhammad Ali Raza Rizvi**


