using Backend.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.BLL.Servicios.Contrato
{
    public interface IDojoService
    {
        Task<List<DojoDTO>> Lista();
       // Task<SesionDTO> ValidarCredenciales(string corrreo, string clave);
        Task<DojoDTO> Crear(DojoDTO modelo);
        Task<bool> Editar(DojoDTO modelo);
        Task<bool> Eliminar(int id);
    }
}
