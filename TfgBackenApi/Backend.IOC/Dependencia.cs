using Backend.DAL.DBContext;
using Backend.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Backend.DAL.Repositorios.Contrato;
using Backend.DAL.Repositorios;
using Backend.Utility;
using Backend.BLL.Servicios.Contrato;
using Backend.BLL.Servicios;

namespace Backend.IOC
{
    public static class Dependencia
    {

        public static void inyectarDependencias(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<DojosContext>(options => {
                options.UseSqlServer(configuration.GetConnectionString("cadenaSQL"));
            });

            services.AddTransient(typeof(IGenericRepository<>),typeof(GenericRepository<>));

            services.AddAutoMapper(typeof(AutoMapperProfile));

            services.AddScoped<IRolService, RolService>();
            services.AddScoped<IMaestroService, MaestroService>();
            services.AddScoped<IUsuarioService, UsuarioService>();
            services.AddScoped<IAlumnoService, AlumnoService>();
            services.AddScoped<IDojoService, DojoService>();

        }
    }
}
