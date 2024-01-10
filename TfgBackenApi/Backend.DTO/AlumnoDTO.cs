using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.DTO
{
    public class AlumnoDTO
    {
        public int IdAlumno { get; set; }
        public string? Nombre { get; set; }

        public string? Apellido { get; set; }

        public string? Rango { get; set; }

        public string? Dojo { get; set; }

        public string? CodigoAlumno { get; set; }
    }
}
