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
    public class UsuarioService : IUsuarioService
    {
        private readonly IGenericRepository<Usuario> _usuarioRepositorio;
        private readonly IMapper _mapper;

        public UsuarioService(IGenericRepository<Usuario> usuarioRepositorio, IMapper mapper)
        {
            _usuarioRepositorio = usuarioRepositorio;
            _mapper = mapper;
        }

        public async Task<List<UsuarioDTO>> Lista()
        {
            try
            {
                var queryUsuario = await _usuarioRepositorio.consultar();
                var listaUsuarios = queryUsuario.ToList();
                return _mapper.Map<List<UsuarioDTO>>(listaUsuarios);

              
            }
            catch
            {
                throw;
            }
        }

        public async Task<SesionDTO> ValidarCredenciales(string correo, string clave)
        {
            try 
            {
                var queryUsuario = await _usuarioRepositorio.consultar(u =>
                    u.Correo == correo &&
                    u.Password == clave);

                if (queryUsuario.FirstOrDefault() == null)
                    throw new TaskCanceledException("EL USUARIO NO EXISTE");

                Usuario devolverUsuario = queryUsuario.First();
                // include(rol => idRol).First();

                return _mapper.Map<SesionDTO>(devolverUsuario);

            }
            catch
            {
                throw;
            }
        }

        public async Task<UsuarioDTO> Crear(UsuarioDTO modelo)
        {
            try
            {
                var usuarioCreado = await _usuarioRepositorio.crear(_mapper.Map<Usuario>(modelo));
                if (usuarioCreado.Id == 0)
                    throw new TaskCanceledException("NO SE PUDO CREAR EL USUARIO");

                var query = await _usuarioRepositorio.consultar(usuario => usuario.Id == usuarioCreado.Id);

                usuarioCreado = query.First();
                // Include(rol=>rol.IdRol).First();

                return _mapper.Map<UsuarioDTO>(usuarioCreado);
            }
            catch
            {
                throw;
            }
        }

        public async Task<bool> Editar(UsuarioDTO modelo)
        {
            try
            {
                var usuarioModelo = _mapper.Map<Usuario>(modelo);

                var usuarioEncontrado = await _usuarioRepositorio.obtener(u => u.Id == usuarioModelo.Id);

                if (usuarioEncontrado == null)
                    throw new TaskCanceledException("EL USUARIO NO EXISTE");

                usuarioEncontrado.Nombre = usuarioModelo.Nombre;
                usuarioEncontrado.Correo = usuarioModelo.Correo;
                usuarioEncontrado.Id = usuarioModelo.Id;
                usuarioEncontrado.Password = usuarioModelo.Password;

                bool respuesta = await _usuarioRepositorio.editar(usuarioEncontrado);
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
                var usuarioEncontrado = await _usuarioRepositorio.obtener(usuario => usuario.Id == id);

                if(usuarioEncontrado == null)
                    throw new TaskCanceledException("EL USUARIO NO EXISTE");

                bool respuesta = await _usuarioRepositorio.eliminar(usuarioEncontrado);

                if (!respuesta)
                    throw new TaskCanceledException("NO SE PUDO ELIMINAR AL USUARIO");
                return respuesta;

            }
            catch { throw; }
        }



    }
}
