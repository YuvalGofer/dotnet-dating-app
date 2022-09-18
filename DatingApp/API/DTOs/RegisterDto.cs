using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class RegisterDto
    {
        [Required]
        public string Username  { get; set; }

        [StringLength(8, MinimumLength =4, ErrorMessage ="You must specify password 4 to 8 character")]
        [Required]
        public string Password  { get; set; }
    }
}