const { test, expect } = require('@playwright/test');

test('Verificar que los comentarios pertenezcan al post 1', async ({ request }) => {

    // 1. Obtener el post con id 1
    const respuestaPost = await request.get(
        'https://jsonplaceholder.typicode.com/posts/1'
    );

    // Verificar que la petición fue exitosa
    expect(respuestaPost.ok()).toBeTruthy();

    // Convertir la respuesta a JSON
    const post = await respuestaPost.json();

    // Verificar que realmente sea el post 1
    expect(post.id).toBe(1);


    // 2. Obtener los comentarios del post 1
    const respuestaComentarios = await request.get(
        'https://jsonplaceholder.typicode.com/posts/1/comments'
    );

    // Verificar que la petición fue exitosa
    expect(respuestaComentarios.ok()).toBeTruthy();

    // Convertir la respuesta a JSON
    const comentarios = await respuestaComentarios.json();


    // 3. Verificar que la respuesta sea una lista
    expect(Array.isArray(comentarios)).toBeTruthy();


    // 4. Verificar que TODOS los comentarios pertenezcan al post 1
    const todosPertenecenAlPost1 = comentarios.every(
        comentario => comentario.postId === 1
    );

    expect(todosPertenecenAlPost1).toBe(true);

});