using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Backend.DTO;

namespace Backend.BLL.Servicios.Contrato
{
    public interface IAlumnoService
    {
        Task<List<AlumnoDTO>> Lista();
        Task<AlumnoDTO> Crear(AlumnoDTO modelo);
        Task<bool> Editar(AlumnoDTO modelo);
        Task<bool> Eliminar(int CodigoAlumno);
    }
}
