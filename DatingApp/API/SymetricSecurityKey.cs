using System;
using Microsoft.IdentityModel.Tokens;

namespace API
{
    internal class SymetricSecurityKey
    {
        private byte[] bytes;

        public SymetricSecurityKey(byte[] bytes)
        {
            this.bytes = bytes;
        }

        public static implicit operator SecurityKey(SymetricSecurityKey v)
        {
            throw new NotImplementedException();
        }
    }
}