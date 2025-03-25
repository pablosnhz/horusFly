using apiHorusFly.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace apiHorusFly.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ComboController : ControllerBase
    {
        private readonly HorusFlyContext _dbHorusFlyContext;
        public ComboController(HorusFlyContext dbHorusFlyContext)
        {
            _dbHorusFlyContext = dbHorusFlyContext;
        }

        [HttpGet]
        [Route("PackagesCombo")]
        public async Task<IActionResult> PackagesCombo()
        {
            var PackagesCombo = await _dbHorusFlyContext.PackagesCombos.ToListAsync();
            return StatusCode(StatusCodes.Status200OK, new { value = PackagesCombo });
        }

        [HttpGet]
        [Route("FlyCombo")]
        public async Task<IActionResult> FlyCombo()
        {
            var FlyCombo = await _dbHorusFlyContext.FlyCombos.ToListAsync();
            return StatusCode(StatusCodes.Status200OK, new { value = FlyCombo });
        }

        [HttpGet]
        [Route("DiscountCombo")]
        public async Task<IActionResult> DiscountCombo()
        {
            var DiscountCombo = await _dbHorusFlyContext.DiscountCombos.ToListAsync();
            return StatusCode(StatusCodes.Status200OK, new { value = DiscountCombo });
        }
    }
}
