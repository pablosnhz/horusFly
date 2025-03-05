using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using apiHorusFly.Custom;
using apiHorusFly.Models;
using apiHorusFly.Models.Dtos;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;

namespace apiHorusFly.Controllers
{
    [Route("api/[controller]")]
    
    [ApiController]
    public class HotelController : ControllerBase
    {
        private readonly HorusFlyContext _dbHorusFlyContext;
        public HotelController(HorusFlyContext dbHorusFlyContext)
        {
            _dbHorusFlyContext = dbHorusFlyContext;
        }

        [HttpGet]
        [Route("List")]
        public async Task<IActionResult>List()
        {
            var list = await _dbHorusFlyContext.Hotels.ToListAsync();
            return StatusCode(StatusCodes.Status200OK, new {value = list});
        }
    }
}
