using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Backend.BLL.Servicios.Contrato;
using Backend.DAL.Repositorios.Contrato;
using Backend.DTO;
using Backend.Model;


namespace Backend.BLL.Servicios
{
    public class RolService: IRolService
    {
        
        private readonly IGenericRepository<Rol> _rolRepositorio;
        private readonly IMapper _mapper;

       

        public RolService(IGenericRepository<Rol> rolRepositorio, IMapper mapper)
        {
            _rolRepositorio = rolRepositorio;
            _mapper = mapper;
        }

        public async Task<List<RolDTO>> Lista()
        {
            try
            {
                var listaRoles = await _rolRepositorio.consultar();
                return _mapper.Map<List<RolDTO>>(listaRoles.ToList());
            }
            catch
            {
                throw;
            }
        }


    }
}
