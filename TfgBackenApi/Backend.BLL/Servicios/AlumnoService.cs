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
    public class AlumnoService : IAlumnoService
    {
        private readonly IGenericRepository<Alumno> _alumnoRepositorio;
        private readonly IMapper _mapper;

        public AlumnoService(IGenericRepository<Alumno> alumnoRepositorio, IMapper mapper)
        {
            _alumnoRepositorio = alumnoRepositorio;
            _mapper = mapper;
        }

        public async Task<List<AlumnoDTO>> Lista()
        {
            try
            {
                var queryAlumno = await _alumnoRepositorio.consultar();
                var listaAlumnos = queryAlumno.ToList();
                return _mapper.Map<List<AlumnoDTO>>(listaAlumnos.ToList());
            }
            catch
            {
                throw;
            }
        }
        public async Task<AlumnoDTO> Crear(AlumnoDTO modelo)
        {
            try
            {
                var alumnoCreado = await _alumnoRepositorio.crear(_mapper.Map<Alumno>(modelo));
                if (alumnoCreado.IdAlumno == 0)
                    throw new TaskCanceledException("NO SE PUDO CREAR EL ALUMNO");

                /*
                var query = await _alumnoRepositorio.consultar(u => u.Id == alumnoCreado.Id);
                alumnoCreado = query.Include(rol => rol.Id).First();
                */
                return _mapper.Map<AlumnoDTO>(alumnoCreado);
            }
            catch
            {
                throw;
            }
        }

        public async Task<bool> Editar(AlumnoDTO modelo)
        {
            try
            {
                var alumnoModelo = _mapper.Map<Alumno>(modelo);

                var usuarioEncontrado = await _alumnoRepositorio.obtener(a => a.IdAlumno == alumnoModelo.IdAlumno);

                if (usuarioEncontrado == null)
                    throw new TaskCanceledException("EL ALUMNO NO EXISTE");

                usuarioEncontrado.Nombre = alumnoModelo.Nombre;
                usuarioEncontrado.Correo = alumnoModelo.Correo;
                usuarioEncontrado.IdAlumno = alumnoModelo.IdAlumno;
                usuarioEncontrado.CodigoAlumno = alumnoModelo.CodigoAlumno;

                bool respuesta = await _alumnoRepositorio.editar(usuarioEncontrado);
                if (!respuesta)
                    throw new TaskCanceledException("NO SE PUDO EDITAR");
                return respuesta;
            }
            catch { throw; }
        }
         
        public async Task<bool> Eliminar(int CodigoAlumno)
        {
            
            try
            { 
               var alumnoEncontrado = await _alumnoRepositorio.obtener(u => u.IdAlumno == CodigoAlumno);

                if (alumnoEncontrado == null)
                    throw new TaskCanceledException("EL ALUMNO NO EXISTE");

                bool respuesta = await _alumnoRepositorio.eliminar(alumnoEncontrado);

                if (!respuesta)
                    throw new TaskCanceledException("NO SE PUDO ELIMINAR AL ALUMNO");
                return respuesta;

            }
            catch { throw; }
        }

      
    }
}
