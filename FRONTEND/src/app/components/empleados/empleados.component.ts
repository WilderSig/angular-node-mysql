import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../services/empleado.service';
import { AgregarEmpleadoComponent } from '../agregar-empleado/agregar-empleado.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre', 'email', 'puesto', 'salario', 'fecha','departamento', 'acciones'];
  empleados: any[] = [];

  constructor(private empleadoService: EmpleadoService,
    private dialog: MatDialog 
) {}

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  obtenerEmpleados(): void {
    this.empleadoService.getEmpleados().subscribe(
      (data) => {
        console.log(data);
        this.empleados = data;
      },
      (error) => {
        console.error('Error al obtener empleados', error);
      }
    );
  }

  eliminarEmpleado(id: number): void {
    if (confirm('¿Estás seguro de que quieres eliminar este empleado?')) {
      this.empleadoService.deleteEmpleado(id).subscribe(() => {
        this.empleados = this.empleados.filter(e => e.id !== id);
      });
    }
  }

  //abrir modal
  abrirModalAgregar(): void {
    const dialogRef = this.dialog.open(AgregarEmpleadoComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.obtenerEmpleados(); // Recargar la lista después de agregar
      }
    });
  }


}
