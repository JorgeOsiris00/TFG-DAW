using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Backend.DTO;

namespace Backend.BLL.Servicios.Contrato
{
    public interface IRolService
    {
         Task<List<RolDTO>> Lista();
        //Task<List<AlumnoDTO>> Lista();
    }
}
