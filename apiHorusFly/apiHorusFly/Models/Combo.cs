using System;
using System.Collections.Generic;

namespace apiHorusFly.Models;

public partial class Combo
{
    public int IdCombo { get; set; }

    public string ComboType { get; set; } = null!;

    public string Destinations { get; set; } = null!;

    public string? DestinationsTwo { get; set; }

    public string Includes { get; set; } = null!;

    public decimal? Discount { get; set; }

    public int MinDays { get; set; }

    public int MaxDays { get; set; }

    public decimal Price { get; set; }

    public string Image { get; set; } = null!;
}
