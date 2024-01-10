using System;
using System.Collections.Generic;

namespace Backend.Model;

public partial class Dojo
{
    public int Id { get; set; }

    public string? Nombre { get; set; }

    public string? Pais { get; set; }

    public string? Domicilio { get; set; }

    public string? Calle { get; set; }

    public string? Dojo1 { get; set; }
}
