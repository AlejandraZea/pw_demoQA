import {test, expect} from '@playwright/test';

//create the test to check if the home page is displayed correctlys

//this test execute 6 tests, one for each browser, and the test will be executed in parallel
test('should show the home page', async ({ page }) => {
  //step 1: navigate to the home page
  await page.goto('https://demoqa.com/'); 
  //await is used to wait for the page to load before continuing with the test
  //at not specify the browser, the test will run on all the browsers


  //this is optional to print the tittle on the console
  let title: string = await page.title();
  console.log(`The title of the page is: ${title}`);

  // Expect the page to have a title containing "demosite"
  await expect(page).toHaveTitle(/demosite/);
});

