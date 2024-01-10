using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.DTO
{
    public class DojoDTO
    {
        public int Id { get; set; }
        public string? Nombre { get; set; }

        public string? Pais { get; set; }

        public string? Domicilio { get; set; }

        public string? Calle { get; set; }
    }
}
