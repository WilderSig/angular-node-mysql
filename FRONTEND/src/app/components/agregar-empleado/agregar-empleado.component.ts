import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpleadoService } from '../../services/empleado.service';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent {
  empleadoForm: FormGroup;
  departamentos: any[] = [];

  constructor(
    private fb: FormBuilder,
    private empleadoService: EmpleadoService,
    private dialogRef: MatDialogRef<AgregarEmpleadoComponent>
  ) {
    this.empleadoForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      puesto: ['', Validators.required],
      salario: ['', Validators.required],
      fecha_de_contratacion: ['', Validators.required],
      departmentId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.cargarDepartamentos();
  }

  cargarDepartamentos(): void {
    this.empleadoService.getDepartamentos().subscribe(
      (data) => {
        this.departamentos = data;
      },
      (error) => {
        console.error('Error al obtener departamentos:', error);
      }
    );
  }

  agregarEmpleado(): void {
    if (this.empleadoForm.valid) {
      this.empleadoService.createEmpleado(this.empleadoForm.value).subscribe(() => {
        this.dialogRef.close(true); // Cerrar modal y actualizar lista
      });
    }
  }

  cerrar(): void {
    this.dialogRef.close();
  }
  
}
