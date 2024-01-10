using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using Backend.BLL.Servicios.Contrato;
using Backend.DTO;
using Backend.API.Utilidad;

namespace Backend.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MaestroController : ControllerBase
    {

        private readonly IMaestroService _maestroServicio;

        public MaestroController(IMaestroService maestroServicio)
        {
            _maestroServicio = maestroServicio;
        }

        [HttpGet]
        [Route("Lista")]
        public async Task<IActionResult> Lista()
        {
            var rsp = new Response<List<MaestroDTO>>();

            try
            {
                rsp.status = true;
                rsp.value = await _maestroServicio.Lista();

            }
            catch (Exception ex)
            {
                rsp.status = false;
                rsp.msg = ex.Message;
            }
            return Ok(rsp);
        }

        [HttpPost]
        [Route("Guardar")]
        public async Task<IActionResult> Guardar([FromBody] MaestroDTO maestro)
        {
            var rsp = new Response<MaestroDTO>();

            try
            {
                rsp.status = true;
                rsp.value = await _maestroServicio.Crear(maestro);

            }
            catch (Exception ex)
            {
                rsp.status = false;
                rsp.msg = ex.Message;
            }
            return Ok(rsp);
        }

        [HttpPut]
        [Route("Editar")]
        public async Task<IActionResult> Editar([FromBody] MaestroDTO maestro)
        {
            var rsp = new Response<bool>();

            try
            {
                rsp.status = true;
                rsp.value = await _maestroServicio.Editar(maestro);

            }
            catch (Exception ex)
            {
                rsp.status = false;
                rsp.msg = ex.Message;
            }
            return Ok(rsp);
        }


        [HttpDelete]
        [Route("Eliminar/{id:int}")]
        public async Task<IActionResult> Eliminar(int id)
        {
            var rsp = new Response<bool>();

            try
            {
                rsp.status = true;
                rsp.value = await _maestroServicio.Eliminar(id);

            }
            catch (Exception ex)
            {
                rsp.status = false;
                rsp.msg = ex.Message;
            }
            return Ok(rsp);
        }

    }
}
