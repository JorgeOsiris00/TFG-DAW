using Backend.BLL.Servicios.Contrato;
using Backend.DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using Backend.BLL.Servicios.Contrato;
using Backend.DTO;
using Backend.API.Utilidad;

namespace Backend.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DojoController : ControllerBase
    {
        private readonly IDojoService _dojoServicio;

        public DojoController(IDojoService dojoServicio)
        {
            _dojoServicio = dojoServicio;
        }


        [HttpGet]
        [Route("Lista")]
        public async Task<IActionResult> Lista()
        {
            var rsp = new Response<List<DojoDTO>>();

            try
            {
                rsp.status = true;
                rsp.value = await _dojoServicio.Lista();

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
        public async Task<IActionResult> Guardar([FromBody] DojoDTO dojo)
        {
            var rsp = new Response<DojoDTO>();

            try
            {
                rsp.status = true;
                rsp.value = await _dojoServicio.Crear(dojo);

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
        public async Task<IActionResult> Editar([FromBody] DojoDTO dojo)
        {
            var rsp = new Response<bool>();

            try
            {
                rsp.status = true;
                rsp.value = await _dojoServicio.Editar(dojo);

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
                rsp.value = await _dojoServicio.Eliminar(id);

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
