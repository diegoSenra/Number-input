using Microsoft.AspNetCore.Mvc;
using numberinput.Service;
using numberinput.Model;


namespace numberinput.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NumberController : ControllerBase
    {
        private NumberService service;

        public NumberController()
        {
            this.service = new NumberService();
        }

        // POST: api/Number
        [HttpPost]
        public void PostToDb([FromBody] Number number)
        {
            service.PostNumberToDb(number);
        }

        // POST: api/Number/Sum
        [HttpPost("Sum")]
        public JsonResult PostSum([FromBody] NumberList numberList)
        {
            var result = new Number() {NumberInput = service.Sum(numberList.List)};

            return new JsonResult(result);
        }
    }
}
