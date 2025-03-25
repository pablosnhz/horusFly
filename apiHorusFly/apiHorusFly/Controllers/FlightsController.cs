using apiHorusFly.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace apiHorusFly.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FlightsController : ControllerBase
    {
        private readonly HorusFlyContext _dbHorusFlyContext;
        public FlightsController(HorusFlyContext dbHorusFlyContext)
        {
            _dbHorusFlyContext = dbHorusFlyContext;
        }

        [HttpGet]
        [Route("ListFly")]
        public async Task<IActionResult>ListFly()
        {
            var listFly = await _dbHorusFlyContext.Vuelos.ToListAsync();
            return StatusCode(StatusCodes.Status200OK, new { value = listFly });
        }
    }
}
