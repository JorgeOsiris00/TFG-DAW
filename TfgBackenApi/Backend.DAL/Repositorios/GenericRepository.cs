using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Backend.DAL.Repositorios.Contrato;
using Backend.DAL.DBContext;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace Backend.DAL.Repositorios
{
   
        public class GenericRepository<TModelo>: IGenericRepository<TModelo> where TModelo:class
        {
         private readonly DojosContext _dojosContext;

        public GenericRepository(DojosContext dojosContext)
        {
            _dojosContext = dojosContext;
        }

        public async Task<IQueryable<TModelo>> consultar(Expression<Func<TModelo, bool>> filtro = null)
        {
            try
            {
                IQueryable<TModelo> queryModelo = filtro == null? _dojosContext.Set<TModelo>():_dojosContext.Set<TModelo>().Where(filtro);
                return queryModelo;
            }
            catch
            { throw; }
        }

        public async Task<TModelo> crear(TModelo modelo)
        {
            try
            {
                _dojosContext.Set<TModelo>().Add(modelo);
                await _dojosContext.SaveChangesAsync();
                return modelo;
            }
            catch
            { throw; }
        }

        public async Task<bool> editar(TModelo modelo)
        {
            try
            {
                _dojosContext.Set<TModelo>().Update(modelo);
                await _dojosContext.SaveChangesAsync() ;
                return true;
            }
            catch
            { throw; }
        }

        public async Task<bool> eliminar(TModelo modelo)
        {
            try
            {
                _dojosContext.Set<TModelo>().Remove(modelo);
                await _dojosContext.SaveChangesAsync(); 
                return true;

            }
            catch
            { throw; }
        }
    

        public async Task<TModelo> obtener(Expression<Func<TModelo, bool>> filtro)
        {
            try
            {
                TModelo modelo = await _dojosContext.Set<TModelo>().FirstOrDefaultAsync(filtro);
                return modelo;
            }
            catch
                {throw;}
        }
      
    }

    
}
