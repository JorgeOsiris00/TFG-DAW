using Backend.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.BLL.Servicios.Contrato
{
    public interface IMaestroService
    {
        Task<List<MaestroDTO>> Lista();
       // Task<SesionDTO> ValidarCredenciales(string corrreo, string clave);
        Task<MaestroDTO> Crear(MaestroDTO modelo);
        Task<bool> Editar(MaestroDTO modelo);
        Task<bool> Eliminar(int id);
    }
}
