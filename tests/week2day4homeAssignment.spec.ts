
import test, {chromium} from "@playwright/test";

test("Exploring Playwright Built-in Locators and the DOM",async ({page})=>{
//Launch Browser
await page.goto("https://leaftaps.com/opentaps/control/main");

//Enter UserName using getByLabel locator
await page.getByLabel('Username').fill('Demosalesmanager');
//Enter Password using getByLabel locator
await page.getByLabel('Password').fill('crmsfa');
// Click Login using getByRole locator
await page.getByRole('button').click();
// click CRM/SFA using getByRole Locator
await page.getByRole('link',{name:'CRM/SFA'}).click();
// To check the company Logo text
await page.getByAltText('opentaps CRM').click()
//Again click CRM/SFA
await page.getByRole('link',{name:'CRM/SFA'}).click();
//Click Lead using getByText
await page.getByText('Leads',{exact:true}).click();

})

// Done with the following locators
// getByLabel
// getByRole
// getByAltText
// getByText
// this are not available in the leaftaps link
// getByPlaceholder
// getByTitle()
// getByTestId()