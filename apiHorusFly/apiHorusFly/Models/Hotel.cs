using System;
using System.Collections.Generic;

namespace apiHorusFly.Models;

public partial class Hotel
{
    public int IdHotel { get; set; }

    public string Name { get; set; } = null!;

    public string City { get; set; } = null!;

    public string Country { get; set; } = null!;

    public DateTime DateEntrance { get; set; }

    public DateTime DateExit { get; set; }

    public int Persons { get; set; }

    public int Rooms { get; set; }

    public decimal Scores { get; set; }

    public int? Rating { get; set; }

    public decimal Price { get; set; }

    public string? Includes { get; set; }

    public string? Image { get; set; }
}
