using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using apiHorusFly.Custom;
using apiHorusFly.Models;
using apiHorusFly.Models.Dtos;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;

namespace apiHorusFly.Controllers
{
    [Route("api/[controller]")]
    [AllowAnonymous]
    [ApiController]
    public class AccesoController : ControllerBase
    {
        private readonly HorusFlyContext _dbHorusFlyContext;
        private readonly Utilidades _utilidades;
        public AccesoController(HorusFlyContext dbHorusFlyContext, Utilidades utilidades)
        {
            _dbHorusFlyContext = dbHorusFlyContext;
            _utilidades = utilidades;
        }

        [HttpPost]
        [Route("Register")]
        public async Task<IActionResult> Register(UsuarioDto objeto)
        {
            var roleUsuario = await _dbHorusFlyContext.Roles.FirstOrDefaultAsync(r => r.RoleName == "usuario");
            if (roleUsuario == null)
                return BadRequest(new { message = "error" });

            var modelUsuario = new Usuario
            {
                Name = objeto.name,
                Email = objeto.email,
                Password = _utilidades.encriptarSHA256(objeto.password),
                RoleId = roleUsuario.RoleId
            };

            await _dbHorusFlyContext.Usuarios.AddAsync(modelUsuario);
            await _dbHorusFlyContext.SaveChangesAsync();

            if (modelUsuario.IdUser != 0)
                return StatusCode(StatusCodes.Status200OK, new { isSuccess = true });
            else
                return StatusCode(StatusCodes.Status200OK, new { isSuccess = false });
        }

        [HttpPost]
        [Route("Login")]
        public async Task<IActionResult> Login(LoginDto objeto)
        {
            var userFound = await _dbHorusFlyContext.Usuarios
                                    .Where(u => 
                                    u.Email == objeto.email &&
                                    u.Password == _utilidades.encriptarSHA256(objeto.password)
                                    ).FirstOrDefaultAsync();
            if (userFound == null)
                return StatusCode(StatusCodes.Status200OK, new { isSuccess = false, token = "" });
            else
                return StatusCode(StatusCodes.Status200OK, new { isSuccess = true, token = _utilidades.generarJWT(userFound) });
            
        }

        [HttpGet("users")]
        public IActionResult GetUsers()
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

            if (userId == null)
            {
                return Unauthorized();
            }

            var user = _dbHorusFlyContext.Usuarios.FirstOrDefault(u => u.IdUser.ToString() == userId);

            if (user == null)
            {
                return NotFound();
            }
            string roleName = user.RoleId == 1 ? "admin" : user.RoleId == 2 ? "usuario" : "no tiene rango";

            return Ok(new { userName = user.Name, email = user.Email, role = roleName });
        }
    }
}
