using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace TimerChallenge.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoggingController : ControllerBase
    {
        private static List<LogResource> Logs { get; set; } = new List<LogResource>();

        [HttpPost]
        public IActionResult Post([FromBody] LogResource logResource)
        {
            Logs.Add(logResource);
            return NoContent();
        }

        [HttpPost("clear")]
        public IActionResult Clear()
        {
            Logs = new List<LogResource>();
            return NoContent();
        }

        [HttpGet]
        public IList<LogResource> Get()
        {
            return Logs;
        }
    }

    public class LogResource
    {
        public string Text { get; set; }
    }
}