// Importamos las funciones "test" (definir una prueba) y "expect" (verificar resultados)
const { test, expect } = require('@playwright/test');

// Agrupamos nuestras pruebas bajo un nombre descriptivo
test.describe('Login - SauceDemo', () => {

  // Primera prueba: login con datos correctos
  test('Login exitoso con usuario válido', async ({ page }) => {

    // Abrimos el navegador en la página de login
    await page.goto('https://www.saucedemo.com/');

    // Escribimos el usuario en el campo con id="user-name"
    await page.fill('#user-name', 'standard_user');

    // Escribimos la contraseña en el campo con id="password"
    await page.fill('#password', 'secret_sauce');

    // Hacemos clic en el botón con id="login-button"
    await page.click('#login-button');

    // Verificamos que la URL cambió a la página de inventario
    await expect(page).toHaveURL(/inventory.html/);

    // Verificamos que el título de la página diga "Products"
    await expect(page.locator('.title')).toHaveText('Products');
  });


  // Segunda prueba: Login con datos incorrectos
  test('Login fallido con credenciales inválidas', async ({ page }) => {

    // Abrimos la página de login
    await page.goto('https://www.saucedemo.com/');

    // Escribimos un usuario incorrecto
    await page.fill('#user-name', 'usuario_invalido');

    // Escribimos una contraseña incorrecta
    await page.fill('#password', 'clave_incorrecta');

    // Hacemos clic en el botón de login
    await page.click('#login-button');

    // Buscamos el elemento de error
    const error = page.locator('[data-test="error"]');

    // Verificamos que el mensaje de error sea visible
    await expect(error).toBeVisible();

    // Verificamos que el mensaje contenga este texto
    await expect(error).toContainText('Username and password do not match');
  });

});