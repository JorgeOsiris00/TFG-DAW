using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.DTO
{
    public class SesionDTO
    {

        public int Id { get; set; }

        public string? Nombre { get; set; }

        public string? Contraseña { get; set; }

        public string? Correo { get; set; }

        public string? Rol { get; set; }

        public string? Dojo { get; set; }
    }
}
