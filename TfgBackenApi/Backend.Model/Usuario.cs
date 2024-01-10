using System;
using System.Collections.Generic;

namespace Backend.Model;

public  class Usuario
{
    public Usuario(int id, string? nombre, string? password, string? correo, string? rol, string? dojo)
    {
        Id = id;
        Nombre = nombre;
        Password = password;
        Correo = correo;
        Rol = rol;
        Dojo = dojo;
    }

    public Usuario() { }

    public int Id { get; set; }

    public string? Nombre { get; set; }

    public string? Password { get; set; }

    public string? Correo { get; set; }

    public string? Rol { get; set; }

    public string? Dojo { get; set; }
}
