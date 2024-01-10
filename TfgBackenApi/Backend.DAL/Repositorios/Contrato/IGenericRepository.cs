 using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using System.Linq.Expressions;

namespace Backend.DAL.Repositorios.Contrato
{
    public interface IGenericRepository<TModel> where TModel:class
    {
        Task<TModel> obtener(Expression<Func<TModel, bool>> filtro);

        Task<TModel> crear(TModel modelo);
        Task<bool> editar(TModel modelo);

        Task<bool> eliminar(TModel modelo);

        Task<IQueryable<TModel>> consultar(Expression<Func<TModel, bool>> filtro = null);
   
    }
}
