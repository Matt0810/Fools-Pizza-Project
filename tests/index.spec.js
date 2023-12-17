import { test, expect } from "@playwright/test";

const localhost = "http://localhost:3000";

test("index.json contains 'Fool's Pizza'", async ({ page }) => {
  // Load the index.json file
  await page.goto(`${localhost}/index.json`);

  // Get the content of the index.json file
  const content = await page.textContent("pre");

  // Parse the content as JSON
  const jsonContent = JSON.parse(content);

  // Check if the content contains "Fool's Pizza"
  expect(jsonContent).toHaveProperty("text", "Fool's Pizza");
});
