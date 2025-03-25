using System;
using System.Collections.Generic;

namespace apiHorusFly.Models;

public partial class Vuelo
{
    public int IdVuelo { get; set; }

    public string Airline { get; set; } = null!;

    public string? FromCity { get; set; }

    public string? ToCity { get; set; }

    public DateTime DateDeparture { get; set; }

    public DateTime? DateReturn { get; set; }

    public int Passengers { get; set; }

    public decimal Price { get; set; }

    public string? Includes { get; set; }

    public int Suitcases { get; set; }

    public string? AirplaneIcon { get; set; }

    public int? Days { get; set; }
}
