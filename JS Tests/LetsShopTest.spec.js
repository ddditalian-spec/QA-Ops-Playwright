const {test} = require('@playwright/test');
const {expect} = require('@playwright/test');

test.only('Lets Shop', async ({page})=>
{
    //chrome - plugins/ cookies 
   //if 2 next line  ar not there it is assumed it is by default browser opened
    //const context= await browser.newContext(); //open window

    //const page = await context.newPage(); //open page within window
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    //get the title and then assertion if it is correct
    console.log(await page.title());

    const userName = await page.locator('#userEmail');
    await userName.fill("ddditalian@gmail.com");
    
    const password = await page.locator("#userPassword");
    await password.fill('Password12');

    await page.locator('input#login').click();
    console.log('Login Click');
    
    //await page.waitForLoadState('networkidle');
    console.log(await page.title()); 
    await page.locator(".card-body b").first().waitFor();// returns only one
    
    const titles = await page.locator(".card-body b").allTextContents();
    await page.locator('.card-body').filter({ hasText: 'ZARA COAT 3' }).locator('button', { hasText: 'Add To Cart' }).click();
    await page.locator('button[routerlink="/dashboard/cart"]').click();
    await page.getByRole('button', { name: 'Checkout' }).click();
    await page.locator('.field').filter({ hasText: 'CVV Code' }).locator('input.txt').fill('455');
    await page.locator('.field').filter({ hasText: 'Name on Card' }).locator('input.txt').fill('John Doe');
    await page.locator('.field').filter({ hasText: 'Apply coupon' }).locator('input.txt').fill('rahulshettyacademy');

    await page.locator('a.action__submit').click();
    await page.pause();
    console.log(titles);

    //Platwright code



});

test('UI Controls', async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    
    const userName = await page.locator('#username');
    await userName.fill("");
    await userName.fill("rahulshettyacademy");

    const password = await page.locator("#password");
    await password.fill("");
    await password.fill("Learning@830$3mK2");

    const dropdown = page.locator("select.form-control");
    await dropdown.selectOption("consult");

    await  page.locator(".radiotextsty").last().click();
    await page.locator("#okayBtn").click();

    await page.locator("#terms").click();
    await expect( page.locator("#terms")).toBeChecked();
    await page.locator("#terms").uncheck();
    expect(await await page.locator("#terms").isChecked()).toBeFalsy();
    const docLink =  page.locator("[href*='documents-request']");
    await expect(docLink).toHaveAttribute("class", "blinkingText");

    //assertion
    console.log(await page.locator(".radiotextsty").last().isChecked());
    await expect(page.locator(".radiotextsty").last()).toBeChecked();
    //await page.pause();


    
});


test('New Page test', async({browser})=>{
    const context= await browser.newContext(); //open window
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    
    
    const docLink =  page.locator("[href*='documents-request']");
    
    const [newPage]= await Promise.all([
    context.waitForEvent('page'), //listening should be before click whch opens pag    docLink.click();//new page is o
    docLink.click(),
    ])
    
    // const page2 = context.waitForEvent('page'); //listening should be before click whch opens page
    // page2
    // docLink.click();//new page is opened
    console.log(newPage.title());
    const text =await  newPage.locator(".red").textContent();
    const arrayText = text.split("@");
    const domain = arrayText[1].split(" ")[0];
    console.log(domain);
    console.log(text);
    
    const userName = await page.locator("#username");
    await userName.fill("");

    await userName.fill(domain);
    console.log(userName.inputValue());
    await page.pause();

});