// File executed once before (setup) and after (teardown) all tests, ideal for global setup like starting a test server or database connection

export async function setup() {
  // Runs before all tests
  // This is a bit excessive, but sometimes the test doesn't run completely
  // and leaves behind garbage, such as old databases or data in the table
}

export async function teardown() {
  // Run after all tests
}
