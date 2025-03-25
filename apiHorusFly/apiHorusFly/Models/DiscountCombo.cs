using System;
using System.Collections.Generic;

namespace apiHorusFly.Models;

public partial class DiscountCombo
{
    public int Id { get; set; }

    public string? ComboType { get; set; }

    public string? Destinations { get; set; }

    public string? DestinationsTwo { get; set; }

    public string? Includes { get; set; }

    public int? Discount { get; set; }

    public int? MinDays { get; set; }

    public int? MaxDays { get; set; }

    public DateTime? DepartureDate { get; set; }

    public DateTime? ReturnDate { get; set; }

    public string? Offer { get; set; }

    public int? Passagers { get; set; }

    public decimal? PreviousPrice { get; set; }

    public decimal? Price { get; set; }

    public string? Image { get; set; }
}
