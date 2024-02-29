using Microsoft.AspNetCore.Mvc;

namespace AdviceGenerator1.Controllers
{
    public class MainPageController : Controller
    {
        public IActionResult Advice()
        {
            return View();
        }
    }
}
