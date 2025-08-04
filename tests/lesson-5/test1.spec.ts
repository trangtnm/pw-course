import { test } from "@playwright/test";

test("Test 01", async ({ page }) => {
  await test.step("Navigate to Home Page", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });

  await test.step("Click to open Register page", async () => {
    await page.locator("//a[@href='01-xpath-register-page.html']").click();
  });

  await test.step("Input register form", async () => {
    await page.locator("//input[@id='username']").fill("Trang");
    await page.locator("//input[@id='email']").fill("Trang@gmail.com");
    await page.locator("//input[@id='female']").check();
    await page.locator("//input[@id='traveling']").setChecked(true);
    await page.locator("//option[@value='music']").click();
    await page.locator("//select[@id='country']").selectOption("canada");
    await page
      .locator("//input[@id='profile']")
      .setInputFiles("tests/lesson-5/example/test-data/image.txt");
    await page.locator("//textarea[@id='bio']").fill("Hiiii");
    await page.locator("//button[@type='submit']").click();
  });
});
