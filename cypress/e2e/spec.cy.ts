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


  
  after(() => {
    // Registra la bitácora al final
    console.log('Bitácora de prueba:', bitacora);
  });

});
