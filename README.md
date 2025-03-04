# JavaScript Expert - E2E Coverage

This project aims to explore and learn about end-to-end (E2E) testing using **Mocha** and **Supertest** to test a Node.js API.

## 📂 Project Structure
```
.
├── src
│   ├── api.js          # Simple HTTP server
│   ├── api.test.js     # Integration tests with Mocha and Supertest
├── .gitignore
├── .nycrc.json         # Test coverage configuration
├── package.json        # Dependencies and scripts
├── package-lock.json
├── README.md           # Project documentation
```

## 📌 Technologies Used
- **Node.js**: JavaScript runtime environment for the server.
- **Mocha**: JavaScript test framework.
- **Supertest**: Library for making HTTP requests and testing APIs.
- **NYC**: Tool for test coverage analysis.
- **Assert**: Native Node.js module for assertions.

## 🛠️ Setup
Make sure you have [Node.js](https://nodejs.org/) installed.

```sh
# Clone the repository
git clone https://github.com/willyoliv/javascript-expert--e2e-coverage.git
cd javascript-expert--e2e-coverage

# Install dependencies
npm install
```

### 🚀 How to Run the Project

### Start the server:
```bash
npm start
```
The server will start on port **3000**.

### Running Tests

- 🔹 **Run tests once:**
  ```bash
  npm test
  ```

- 🔹 **Run tests in watch mode:**
  ```bash
  npm run test:dev
  ```

- 🔹 **Generate test coverage report:**
  ```bash
  npm run test:cov
  ```
  The report will be generated in the `coverage` folder.

## 📌 API Routes

| Method | Route      | Description                           |
|--------|----------|-----------------------------------|
| GET    | `/contact` | Returns the message "contact us route". |
| POST   | `/login`   | Validates credentials and returns "Log in succeeded" or "Log in failed". |
| GET/POST | `/hi`  | Returns **404 - Not Found**. |

## 🛠️ Tests

The tests are located in the `src/api.test.js` file and validate the following scenarios:

- ✅ Request to **/contact** returns HTTP **200**.
- ✅ **POST /login** returns **200** for valid credentials.
- ✅ **POST /login** returns **401** for invalid credentials.
- ✅ Request to a non-existent route returns **404**.

---

