// tests/mainHero.spec.js
import { test, expect } from "@playwright/test";

const localhost = "http://localhost:3000";

test("mainHero.tsx has mainHero.description", async ({ page }) => {
  // Load the page where mainHero.tsx is rendered
  await page.goto(`${localhost}/path-to-page-containing-mainHero`);

  // Assuming you need to interact with your app to render the mainHero component
  // Perform necessary actions to render the mainHero component
  // For example, you might need to scroll to the section or trigger certain user actions

  // Wait for the component to render (modify the selector based on your actual structure)
  await page.waitForSelector(".mainHero");

  // Get the content of the mainHero component (modify the selector based on your actual structure)
  const content = await page.textContent(".mainHero");

  // Check if the content includes mainHero.description
  expect(content).toContain("mainHero.description");
});
