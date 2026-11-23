import {test, expect} from '@playwright/test';

test('should show the URL from the home page', async ({ page }) => {
  await page.goto('https://demoqa.com/'); 

  let url: string = await page.url();
  console.log(`The URL of the page is: ${url}`);

  await expect(page).toHaveURL(/demoqa/);
});

