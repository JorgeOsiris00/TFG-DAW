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
    public class DojoService : IDojoService
    {
        private readonly IGenericRepository<Dojo> _dojoRepositorio;
        private readonly IMapper _mapper;

        public DojoService(IGenericRepository<Dojo> dojoRepositorio, IMapper mapper)
        {
            _dojoRepositorio = dojoRepositorio;
            _mapper = mapper;
        }
        public async Task<List<DojoDTO>> Lista()
        {
            try
            {
                var queryDojo = await _dojoRepositorio.consultar();
                var listaDojos = queryDojo.ToList();
                return _mapper.Map<List<DojoDTO>>(listaDojos);
            }
            catch
            {
                throw;
            }
        }
        public async Task<DojoDTO> Crear(DojoDTO modelo)
        {
            try
            {
                var dojoCreado = await _dojoRepositorio.crear(_mapper.Map<Dojo>(modelo));
                if (dojoCreado.Id == 0)
                    throw new TaskCanceledException("NO SE PUDO CREAR EL DOJO");

                var query = await _dojoRepositorio.consultar(u => u.Id == dojoCreado.Id);

                dojoCreado = query.First();

                return _mapper.Map<DojoDTO>(dojoCreado);
            }
            catch
            {
                throw;
            }
        }

        public async Task<bool> Editar(DojoDTO modelo)
        {
            try
            {
                var dojoModelo = _mapper.Map<Dojo>(modelo);

                var dojoEncontrado = await _dojoRepositorio.obtener(d => d.Id == dojoModelo.Id);

                if (dojoEncontrado.Id == 0)
                    throw new TaskCanceledException("EL DOJO NO EXISTE");

                dojoEncontrado.Nombre = dojoModelo.Nombre;
                dojoEncontrado.Pais = dojoModelo.Pais;
                dojoEncontrado.Id = dojoModelo.Id;
                dojoEncontrado.Domicilio = dojoModelo.Domicilio;
                dojoEncontrado.Calle = dojoModelo.Calle;

                bool respuesta = await _dojoRepositorio.editar(dojoEncontrado);
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
                var dojoEncontrado = await _dojoRepositorio.obtener(u => u.Id == id);

                if (dojoEncontrado == null)
                    throw new TaskCanceledException("EL DOJO NO EXISTE");

                bool respuesta = await _dojoRepositorio.eliminar(dojoEncontrado);

                if (!respuesta)
                    throw new TaskCanceledException("NO SE PUDO ELIMINAR EL DOJO");
                return respuesta;

            }
            catch { throw; }
        }

        
    }
}
