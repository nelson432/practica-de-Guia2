const validarPassword = require('./validarPassword');

describe('Pruebas de validarPassword', () => {

    test('Contraseña válida', () => {
        expect(validarPassword('Password1')).toBe(true);
    });

    test('Contraseña muy corta', () => {
        expect(validarPassword('Pass1')).toBe(false);
    });

    test('Contraseña sin mayúscula', () => {
        expect(validarPassword('password1')).toBe(false);
    });

    test('Contraseña sin número', () => {
        expect(validarPassword('Password')).toBe(false);
    });

    test('Contraseña vacía', () => {
        expect(validarPassword('')).toBe(false);
    });

});