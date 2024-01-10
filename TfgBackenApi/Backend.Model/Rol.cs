using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Model
{
    public partial class Rol
    {
        public int idRol { get; set; }

        public string? Nombre { get; set; }

        public virtual ICollection<Usuario> Usuarios { get; } = new List<Usuario>();





    }
}
