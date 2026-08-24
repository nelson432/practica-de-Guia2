Feature: Completar compra en SauceDemo

  Scenario: Usuario completa correctamente una compra
    Given que el usuario inició sesión correctamente en SauceDemo
    And tiene al menos un producto agregado al carrito
    When ingresa al carrito
    And selecciona la opción Checkout
    And completa su nombre, apellido y código postal
    And continúa con la compra
    And finaliza la compra
    Then debe visualizar el mensaje "Thank you for your order!"
    