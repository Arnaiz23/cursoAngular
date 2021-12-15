import { Component, OnInit } from '@angular/core';
import { Entrada } from 'src/app/shared/interfaces/entrada';
import { EntradaService } from 'src/app/shared/services/entrada.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
    public listadoEntradas: any;

  constructor(private entradaService: EntradaService) { 
    // this.listadoEntradas = [ ];
  }

  ngOnInit(): void {
    this.recuperarEntradas();
  }

  private recuperarEntradas(): void {
    this.entradaService.recuperarEntradas().subscribe(
      // Entrada correcta
      (data)=>{
        this.listadoEntradas = data;
      },
      // Entrada error
      (error)=>{

      },
      // Cuando la peticion ha finalizado
      ()=>{

      }
    )
  }

  public mostrarTitulo(titulo: string): void {
    alert(`Entrada seleccionada: ${ titulo }.`);
  }
}
