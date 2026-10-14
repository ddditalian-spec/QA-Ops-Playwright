const {test} = require('@playwright/test');
const {expect} = require('@playwright/test');


test('first Playwright Test', async ({browser})=>
{
    //chrome - plugins/ cookies 
    //if 2 next line  ar not there it is assumed it is by default browser opened
    
    

    const context= await browser.newContext(); //open window

    const page = await context.newPage(); //open page within window
    const userName = await page.locator('input#username');
    const password = await page.locator('input#password');
    const submit = await page.locator('button#submit');
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    console.log(await page.title());
    //css,XPath
    await userName.fill("learning");
    await password.fill("learning");

    await submit.click();

    console.log(await page.locator('div#error').textContent());
    await expect(page.locator('div#error')).toContainText('Your username is invalid!');

    await userName.fill("");
    await userName.fill("student");
    await password.fill("Password123");
    await submit.click();
     console.log(await page.locator('.post-title').textContent());


});

test('Second Login test', async ({browser})=>
{
    const context= await browser.newContext(); //open window
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    console.log(await page.title());

    const userName = await page.locator('input#userEmail');

    const password = await page.locator('input#userPassword');
    const login = await page.locator('input#login');


    await userName.fill("ddditalian@gmail.com");
    await password.fill("Password12");
    await login.click();



});


test('first Page Playwright Test', async ({page})=>
{
    //chrome - plugins/ cookies 
   //if 2 next line  ar not there it is assumed it is by default browser opened
    //const context= await browser.newContext(); //open window

    //const page = await context.newPage(); //open page within window
    await page.goto("https://google.com/");
    //get the title and then assertion if it is correct
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");




    //Platwright code



});