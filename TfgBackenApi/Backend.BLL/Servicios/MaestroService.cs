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
using Microsoft.EntityFrameworkCore;

namespace Backend.BLL.Servicios
{
    public class MaestroService: IMaestroService
    {
        private readonly IGenericRepository<Maestro> _maestroRepositorio;
        private readonly IMapper _mapper;

        public MaestroService(IGenericRepository<Maestro> maestroRepositorio, IMapper mapper)
        {
            _maestroRepositorio = maestroRepositorio;
            _mapper = mapper;
        }

        public async Task<List<MaestroDTO>> Lista()
        {
            try
            {
                var queryMaestro = await _maestroRepositorio.consultar();
                var listaMaestros = queryMaestro.ToList();
                return _mapper.Map<List<MaestroDTO>>(listaMaestros);
            }
            catch
            {
                throw;
            }
        }

        public async Task<MaestroDTO> Crear(MaestroDTO modelo)
        {
            try
            {
                var maestroCreado = await _maestroRepositorio.crear(_mapper.Map<Maestro>(modelo));
                if (maestroCreado.Id == 0)
                    throw new TaskCanceledException("NO SE PUDO CREAR AL MAESTRO");

                /*
                var query = await _alumnoRepositorio.consultar(u => u.Id == alumnoCreado.Id);
                alumnoCreado = query.Include(rol => rol.Id).First();
                */
                return _mapper.Map<MaestroDTO>(maestroCreado);
            }
            catch
            {
                throw;
            }
        }

        public async Task<bool> Editar(MaestroDTO modelo)
        {
            try
            {
                var maestroModelo = _mapper.Map<Maestro>(modelo);

                var maestroEncontrado = await _maestroRepositorio.obtener(a => a.Id == maestroModelo.Id);

                if (maestroEncontrado == null)
                    throw new TaskCanceledException("EL MAESTRO NO EXISTE");

                maestroEncontrado.Nombre = maestroModelo.Nombre;
                maestroEncontrado.Correo = maestroModelo.Correo;
                maestroEncontrado.Id = maestroModelo.Id;
                maestroEncontrado.Rango = maestroModelo.Rango;
                maestroEncontrado.CodigoMaestro = maestroModelo.CodigoMaestro;
                maestroEncontrado.Tlf = maestroModelo.Tlf;

                bool respuesta = await _maestroRepositorio.editar(maestroEncontrado);
                if (!respuesta)
                    throw new TaskCanceledException("NO SE PUDO EDITAR");
                return respuesta;
            }
            catch { throw; }
        }

        public async Task<bool> Eliminar(int id)
        {

            try
            {
                var maestroEncontrado = await _maestroRepositorio.obtener(u => u.Id == id);

                if (maestroEncontrado == null)
                    throw new TaskCanceledException("EL MAESTRO NO EXISTE");

                bool respuesta = await _maestroRepositorio.eliminar(maestroEncontrado);

                if (!respuesta)
                    throw new TaskCanceledException("NO SE PUDO ELIMINAR AL MAESTRO");
                return respuesta;

            }
            catch { throw; }
        }

       
    }
}
