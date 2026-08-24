function validarPassword(password) {

    // Verificar que sea texto y tenga mínimo 8 caracteres
    if (typeof password !== 'string' || password.length < 8) {
        return false;
    }

    // Verificar que tenga al menos una mayúscula
    const tieneMayuscula = /[A-Z]/.test(password);

    // Verificar que tenga al menos un número
    const tieneNumero = /[0-9]/.test(password);

    return tieneMayuscula && tieneNumero;
}

module.exports = validarPassword;