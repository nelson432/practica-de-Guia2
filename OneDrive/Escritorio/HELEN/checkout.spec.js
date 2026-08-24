const { test, expect } = require('@playwright/test');

test('Completar una compra correctamente', async ({ page }) => {

    // 1. Abrimos SauceDemo
    await page.goto('https://www.saucedemo.com/');

    // 2. Escribimos usuario
    await page.fill('#user-name', 'standard_user');

    // 3. Escribimos contraseña
    await page.fill('#password', 'secret_sauce');

    // 4. Iniciamos sesión
    await page.click('#login-button');

    // 5. Verificamos que ingresamos correctamente
    await expect(page).toHaveURL(/inventory.html/);

    // 6. Agregamos un producto al carrito
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');

    // 7. Verificamos que el carrito tenga 1 producto
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

    // 8. Entramos al carrito
    await page.click('.shopping_cart_link');

    // 9. Presionamos Checkout
    await page.click('#checkout');

    // 10. Escribimos el nombre
    await page.fill('#first-name', 'Helen');

    // 11. Escribimos el apellido
    await page.fill('#last-name', 'Prueba');

    // 12. Escribimos el código postal
    await page.fill('#postal-code', '0000');

    // 13. Continuamos con la compra
    await page.click('#continue');

    // 14. Finalizamos la compra
    await page.click('#finish');

    // 15. Verificamos el mensaje final
    await expect(page.locator('.complete-header'))
        .toHaveText('Thank you for your order!');

});