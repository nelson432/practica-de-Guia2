const { test, expect } = require('@playwright/test');

test('Agregar dos productos, eliminar uno y verificar carrito', async ({ page }) => {

    // 1. Abrir SauceDemo
    await page.goto('https://www.saucedemo.com/');

    // 2. Escribir usuario
    await page.fill('#user-name', 'standard_user');

    // 3. Escribir contraseña
    await page.fill('#password', 'secret_sauce');

    // 4. Iniciar sesión
    await page.click('#login-button');

    // 5. Verificar que entramos correctamente
    await expect(page).toHaveURL(/inventory.html/);

    // 6. Agregar primer producto
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');

    // 7. Agregar segundo producto
    await page.click('[data-test="add-to-cart-sauce-labs-bike-light"]');

    // 8. Verificar que el carrito tenga 2 productos
    await expect(page.locator('.shopping_cart_badge')).toHaveText('2');

    // 9. Entrar al carrito
    await page.click('.shopping_cart_link');

    // 10. Eliminar uno de los productos
    await page.click('[data-test="remove-sauce-labs-backpack"]');

    // 11. Verificar que el contador quede en 1
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

});