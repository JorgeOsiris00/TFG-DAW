using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using AutoMapper;
using Backend.DTO;
using Backend.Model;

namespace Backend.Utility
{
    public class AutoMapperProfile: Profile
    {

        public AutoMapperProfile()
        {
            #region Rol
            CreateMap<Rol,RolDTO>().ReverseMap();
            #endregion Rol

            #region Alumno
            CreateMap<Alumno,AlumnoDTO>().ReverseMap();
            #endregion Alumno

            #region Dojo
            CreateMap<Dojo,DojoDTO>().ReverseMap();
            #endregion Dojo

            #region Maestro
            CreateMap<Maestro, MaestroDTO>().ReverseMap();
            #endregion Maestro

            #region Usuario
            CreateMap<Usuario, UsuarioDTO>()
                .ForMember(destino => destino.Rol,
                    opt => opt.MapFrom(origen => origen.Rol)
                );

            CreateMap<Usuario, SesionDTO>()
               .ForMember(destino => destino.Rol,
                   opt => opt.MapFrom(origen => origen.Rol)
               );

            CreateMap<UsuarioDTO, Usuario>()
               .ForMember(destino => destino.Rol,
                   opt => opt.Ignore()
               );

            #endregion Usuario

        }

    }
}
