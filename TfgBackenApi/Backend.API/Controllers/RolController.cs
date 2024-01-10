using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using Backend.BLL.Servicios.Contrato;
using Backend.DTO;
using Backend.API.Utilidad;

namespace Backend.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RolController : ControllerBase
    {

        private readonly IRolService _rolServicio;

        public RolController(IRolService rolServicio)
        {
            _rolServicio = rolServicio;
        }

        [HttpGet]
        [Route("Lista")]
        public async Task <IActionResult> Lista()
        {
            // si hay algun error, generar un RolDTO
            var rsp = new Response<List<RolDTO>>();

            try
            {
                rsp.status = true;
                rsp.value = await _rolServicio.Lista();

            }catch (Exception ex) {
                rsp.status = false;
                rsp.msg = ex.Message;
            }
            return Ok(rsp);
        }


    }
}
