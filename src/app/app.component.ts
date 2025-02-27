import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testPR';

  private _valores = 0;
  private _texto  = '';
  private _datos : unknown;
  
  constructor(private http: HttpClient){}

  public get datos() : unknown {
    return this._datos;
  }
  public set datos(v : unknown) {
    this._datos = v;
  }
  

  public get texto() : string {
    return this._texto;
  }
  public set texto(v : string) {
    this._texto = v;
  }
  
  public get valores(): number {
    return this._valores;
  }
  public set valores(v: number) {
    this._valores = v;
  }


  restar() {
    if (this.valores === 0) { return }
    this.valores--;
  }

  sumar() {
    this.valores++;
  }


  obtenerDatos() {
    this.http.get('https://inventarios-cam-default-rtdb.firebaseio.com/productos.json').subscribe(response => {
      this.datos = response;
    }, error => {
      console.error('Error al obtener datos', error);
    });
  }

}
