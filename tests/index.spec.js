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

test("index.json contains 'Catering'", async ({ page }) => {
  // Load the index.json file
  await page.goto(`${localhost}/index.json`);

  // Get the content of the index.json file
  const content = await page.textContent("pre");

  // Parse the content as JSON
  const jsonContent = JSON.parse(content);

  // Check if the content contains the text "Catering"
  expect(jsonContent).toHaveProperty("text", "Catering");
});

test("index.json contains 'Newsletter'", async ({ page }) => {
  // Load the index.json file
  await page.goto(`${localhost}/index.json`);

  // Get the content of the index.json file
  const content = await page.textContent("pre");

  // Parse the content as JSON
  const jsonContent = JSON.parse(content);

  // Check if the content contains the text "Newsletter"
  expect(jsonContent).toHaveProperty("text", "Newsletter");
});

test("index.json contains 'Reviews'", async ({ page }) => {
  // Load the index.json file
  await page.goto(`${localhost}/index.json`);

  // Get the content of the index.json file
  const content = await page.textContent("pre");

  // Parse the content as JSON
  const jsonContent = JSON.parse(content);

  // Check if the content contains the text "Reviews"
  expect(jsonContent).toHaveProperty("text", "Reviews");
});

test("index.json contains 'Privacy'", async ({ page }) => {
  // Load the index.json file
  await page.goto(`${localhost}/index.json`);

  // Get the content of the index.json file
  const content = await page.textContent("pre");

  // Parse the content as JSON
  const jsonContent = JSON.parse(content);

  // Check if the content contains the text "Privacy"
  expect(jsonContent).toHaveProperty("text", "Privacy");
});