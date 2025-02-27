import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  const bitacora: string[] = [];

  
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule], // Importar FormsModule
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('debería tener un valor inicial de 0', () => {
    expect(component.valores).toBe(0);
    bitacora.push('Validacion inicial compleada');
  });

  it('debería incrementar valores al llamar a sumar()', () => {
    component.sumar();
    expect(component.valores).toBe(1);
    bitacora.push('Validacion inicial compleada2');
  });

  it('debería decrementar valores al llamar a restar() cuando es mayor que 0', () => {
    component.valores = 1;
    component.restar();
    expect(component.valores).toBe(0);
  });

  it('no debería decrementar valores al llamar a restar() cuando es 0', () => {
    component.restar();
    component.sumar();
    expect(component.valores).toBe(1);
  });
  it('debería establecer texto correctamente', () => {
    component.texto = 'Hola';
    expect(component.texto).toBe('Hola');
  });


  it('debería obtener datos del servicio al llamar a obtenerDatos()', () => {
    const mockResponse = { data: 'response data' };
    component.obtenerDatos();

    const httpMock = TestBed.inject(HttpTestingController);
    const req = httpMock.expectOne('https://inventarios-cam-default-rtdb.firebaseio.com/productos.json'); // Cambia la URL aquí
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);

    expect(component.datos).toEqual(mockResponse);
  });


  afterAll(() => {
    // Registra la bitácora al final
    console.log('Bitácora de prueba:', bitacora);
  });
  

});
