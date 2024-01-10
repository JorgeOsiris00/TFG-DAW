using System;
using System.Collections.Generic;

namespace Backend.Model;

public partial class Maestro
{
    public int Id { get; set; }

    public string? Nombre { get; set; }

    public string? Apellido { get; set; }

    public string? Rango { get; set; }

    public string? Dojo { get; set; }

    public string? CodigoMaestro { get; set; }

    public string? Genero { get; set; }

    public string? Tlf { get; set; }

    public string? Correo { get; set; }
}
