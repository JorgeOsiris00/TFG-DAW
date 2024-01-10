using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using Backend.BLL.Servicios.Contrato;
using Backend.DTO;
using Backend.API.Utilidad;

namespace Backend.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AlumnoController : ControllerBase
    {

        private readonly IAlumnoService _alumnoServicio;

        public AlumnoController(IAlumnoService alumnoServicio)
        {
            _alumnoServicio = alumnoServicio;
        }

        [HttpGet]
        [Route("Lista")]
        public async Task<IActionResult> Lista()
        {
            var rsp = new Response<List<AlumnoDTO>>();

            try
            {
                rsp.status = true;
                rsp.value = await _alumnoServicio.Lista();

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
        public async Task<IActionResult> Guardar([FromBody] AlumnoDTO alumno)
        {
            var rsp = new Response<AlumnoDTO>();

            try
            {
                rsp.status = true;
                rsp.value = await _alumnoServicio.Crear(alumno);

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
        public async Task<IActionResult> Editar([FromBody] AlumnoDTO alumno)
        {
            var rsp = new Response<bool>();

            try
            {
                rsp.status = true;
                rsp.value = await _alumnoServicio.Editar(alumno);

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
                rsp.value = await _alumnoServicio.Eliminar(id);

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
