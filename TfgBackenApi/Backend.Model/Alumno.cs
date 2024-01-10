using System;
using System.Collections.Generic;

namespace Backend.Model;

public  class Alumno
{
    public int IdAlumno { get; set; }

    public string? Nombre { get; set; }

    public string? Apellido { get; set; }

    public string? Rango { get; set; }

    public string? Dojo { get; set; }

    public string? CodigoAlumno { get; set; }

    public string? Genero { get; set; }

    public string? Categoria { get; set; }

    public string? Tlf { get; set; }

    public string? Correo { get; set; }
}
