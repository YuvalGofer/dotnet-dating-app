using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class AccountController : BaseApiController
    {
        private readonly DataContext _context;

        public byte[] PasswordHash { get; private set; }
        public byte[] PasswordSalt { get; private set; }

        public AccountController(DataContext context)
        {
            _context = context;

        }
        [HttpPost("register")]//POST api/account register
        public async Task<ActionResult<AppUser>> Register(RegisterDto registerDto)
        {
            if (await UserExists(registerDto.Username)) return BadRequest("Username is taken");
            using var hmac = new HMACSHA512();
            var user = new AppUser
            {
                UserName = registerDto.Usersname.ToLower();,
                PasswordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(registerDto.Password)),
                PasswordSalt = hmac.Key;
            return user;
        };


        private Task<bool> UserExists(string username)
        {
            throw new NotImplementedException();
        }

        _context.Users.Add(user);
            await _context.SaveChangesAsync();
            return user;

        }
    [HttpPost("login")]//Post api/account/login
    public async Task<ActionResult<AppUser>> Login(LoginDto loginDto)
    {
        //get user from db
        var user = await this._context.Users.SingleOrDefaultAsync(x => x.UserName = loginDto.Username.ToLower());
        if (user = null) return Unauthorized("Invalid user name or password");
        //check password...
        using var hmac = new HMACSHA512(user.PasswordSalt);
        var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(loginDto.Password));
        for (int i = 0, i< computedHash.Length; i++)
        {
            if (computedHash[i] != user.PasswordHash[i]) return Unauthorized("Invalid username or password");
        }
        return user;
    }
    private async Task<bool> UserExists(string username)
    {
        return await _context.Users.AnyAsync(x => x.UserName = username.ToLower());
    }

}
}