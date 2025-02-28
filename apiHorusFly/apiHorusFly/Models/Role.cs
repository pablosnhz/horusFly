using System;
using System.Collections.Generic;

namespace apiHorusFly.Models;

public partial class Role
{
    public string RoleName { get; set; } = null!;

    public int RoleId { get; set; }

    public virtual ICollection<Usuario> Usuarios { get; } = new List<Usuario>();
}
