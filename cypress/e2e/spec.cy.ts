/*describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Mundo')
  })
})*/


describe('Pruebas E2E para AppComponent', () => {
  let bitacora: string[] = [];

  
  beforeEach(() => {
    cy.visit('/'); // Asegúrate de que la URL sea correcta
  });

  it('debería mostrar "Hola Mundo"', () => {
    cy.contains('Hola Mundo').should('be.visible');
  });

  it('debería mostrar un valor inicial de 0', () => {
    cy.get('button').contains('Restar').parent().find('span').should('contain', '0');
  });

  it('debería incrementar el valor al hacer clic en "Sumar"', () => {
    cy.get('button').contains('Sumar').click();
    cy.get('span').should('contain', '1');
    cy.get('button').contains('Sumar').click();
    cy.get('span').should('contain', '2');
  });

  it('debería decrementar el valor al hacer clic en "Restar" cuando es mayor que 0', () => {
    cy.get('button').contains('Sumar').click().click().click(); // Asegúrate de que el valor sea 2
    cy.get('button').contains('Restar').click().click();
    cy.get('span').should('contain', '1');
  });

  it('no debería decrementar el valor al hacer clic en "Restar" cuando es 0', () => {
    cy.get('button').contains('Restar').click();
    cy.get('span').should('contain', '0');
  });

  it('debería permitir ingresar texto entre 5 y 10 caracteres', () => {
    cy.get('input').type('Hola'); // Demasiado corto
    cy.get('input').should('have.value', 'Hola');
    cy.get('input').clear().type('Hola Mundo'); // Demasiado largo
    cy.get('input').should('have.value', 'Hola Mundo');
    cy.get('input').clear().type('Texto'); // Correcto
    cy.get('input').should('have.value', 'Texto');
  });


  it('debería obtener datos del servicio al hacer clic en "Obtener Datos"', () => {
    cy.intercept('GET', 'https://inventarios-cam-default-rtdb.firebaseio.com/productos.json').as('getData'); // Cambia la URL aquí

    cy.get('button').contains('Obtener Datos').click(); // Presiona el botón

    cy.wait('@getData').then((interception) => {
      console.log(interception.response)
      expect(interception.response).to.have.property('body'); // Verifica la respuesta

      if(interception.response!.statusCode === 200){
        bitacora.push('Paso 3: Resultados validados');
      } else {
        bitacora.push('Paso 3: Fallo');
      }

      const responseBody = interception.response!.body; // Objeto JSON de la respuesta
      console.log(responseBody); // Muestra el cuerpo de la respuesta en la consola

      // Convierte el objeto a string usando JSON.stringify
      const dataToShow = JSON.stringify(responseBody, null, 2); // Formato bonito (opcional)
      cy.get('pre').should('contain', dataToShow); // Verifica que se muestre en la interfaz
    });
  });

  after(() => {
    // Registra la bitácora al final
    console.log('Bitácora de prueba:', bitacora);
  });

});
