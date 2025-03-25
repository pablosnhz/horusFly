using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace apiHorusFly.Models;

public partial class HorusFlyContext : DbContext
{
    public HorusFlyContext()
    {
    }

    public HorusFlyContext(DbContextOptions<HorusFlyContext> options)
        : base(options)
    {
    }

    public virtual DbSet<DiscountCombo> DiscountCombos { get; set; }

    public virtual DbSet<FlyCombo> FlyCombos { get; set; }

    public virtual DbSet<Hotel> Hotels { get; set; }

    public virtual DbSet<PackagesCombo> PackagesCombos { get; set; }

    public virtual DbSet<Role> Roles { get; set; }

    public virtual DbSet<Usuario> Usuarios { get; set; }

    public virtual DbSet<Vuelo> Vuelos { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=localhost; Database=horusFly;Integrated Security=true; Encrypt=false");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<DiscountCombo>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("DiscountCombo");

            entity.Property(e => e.ComboType)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("combo_type");
            entity.Property(e => e.DepartureDate)
                .HasColumnType("date")
                .HasColumnName("departure_date");
            entity.Property(e => e.Destinations)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("destinations");
            entity.Property(e => e.DestinationsTwo)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("destinationsTwo");
            entity.Property(e => e.Discount).HasColumnName("discount");
            entity.Property(e => e.Id)
                .ValueGeneratedOnAdd()
                .HasColumnName("id");
            entity.Property(e => e.Image)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("image");
            entity.Property(e => e.Includes)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("includes");
            entity.Property(e => e.MaxDays).HasColumnName("max_days");
            entity.Property(e => e.MinDays).HasColumnName("min_days");
            entity.Property(e => e.Offer)
                .HasMaxLength(55)
                .IsUnicode(false)
                .HasColumnName("offer");
            entity.Property(e => e.Passagers).HasColumnName("passagers");
            entity.Property(e => e.PreviousPrice)
                .HasColumnType("decimal(10, 2)")
                .HasColumnName("previous_price");
            entity.Property(e => e.Price)
                .HasColumnType("decimal(10, 2)")
                .HasColumnName("price");
            entity.Property(e => e.ReturnDate)
                .HasColumnType("date")
                .HasColumnName("return_date");
        });

        modelBuilder.Entity<FlyCombo>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("FlyCombo");

            entity.Property(e => e.ComboType)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("combo_type");
            entity.Property(e => e.DepartureDate)
                .HasColumnType("date")
                .HasColumnName("departure_date");
            entity.Property(e => e.Destinations)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("destinations");
            entity.Property(e => e.DestinationsTwo)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("destinationsTwo");
            entity.Property(e => e.Discount).HasColumnName("discount");
            entity.Property(e => e.Id)
                .ValueGeneratedOnAdd()
                .HasColumnName("id");
            entity.Property(e => e.Image)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("image");
            entity.Property(e => e.Includes)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("includes");
            entity.Property(e => e.MaxDays).HasColumnName("max_days");
            entity.Property(e => e.MinDays).HasColumnName("min_days");
            entity.Property(e => e.Offer)
                .HasMaxLength(55)
                .IsUnicode(false)
                .HasColumnName("offer");
            entity.Property(e => e.Passagers).HasColumnName("passagers");
            entity.Property(e => e.PreviousPrice)
                .HasColumnType("decimal(10, 2)")
                .HasColumnName("previous_price");
            entity.Property(e => e.Price)
                .HasColumnType("decimal(10, 2)")
                .HasColumnName("price");
            entity.Property(e => e.ReturnDate)
                .HasColumnType("date")
                .HasColumnName("return_date");
        });

        modelBuilder.Entity<Hotel>(entity =>
        {
            entity.HasKey(e => e.IdHotel).HasName("PK__Hotel__EAD9D928B562CA66");

            entity.ToTable("Hotel");

            entity.Property(e => e.IdHotel).HasColumnName("id_hotel");
            entity.Property(e => e.City)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("city");
            entity.Property(e => e.Country)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("country");
            entity.Property(e => e.DateEntrance)
                .HasColumnType("date")
                .HasColumnName("date_entrance");
            entity.Property(e => e.DateExit)
                .HasColumnType("date")
                .HasColumnName("date_exit");
            entity.Property(e => e.Image)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("image");
            entity.Property(e => e.Includes)
                .HasColumnType("text")
                .HasColumnName("includes");
            entity.Property(e => e.Name)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("name");
            entity.Property(e => e.Persons).HasColumnName("persons");
            entity.Property(e => e.Price)
                .HasColumnType("decimal(10, 2)")
                .HasColumnName("price");
            entity.Property(e => e.Rating).HasColumnName("rating");
            entity.Property(e => e.Rooms).HasColumnName("rooms");
            entity.Property(e => e.Scores)
                .HasColumnType("decimal(3, 1)")
                .HasColumnName("scores");
        });

        modelBuilder.Entity<PackagesCombo>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("PackagesCombo");

            entity.Property(e => e.ComboType)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("combo_type");
            entity.Property(e => e.DepartureDate)
                .HasColumnType("date")
                .HasColumnName("departure_date");
            entity.Property(e => e.Destinations)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("destinations");
            entity.Property(e => e.DestinationsTwo)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("destinationsTwo");
            entity.Property(e => e.Discount).HasColumnName("discount");
            entity.Property(e => e.Hotel)
                .HasMaxLength(55)
                .IsUnicode(false)
                .HasColumnName("hotel");
            entity.Property(e => e.Id)
                .ValueGeneratedOnAdd()
                .HasColumnName("id");
            entity.Property(e => e.Image)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("image");
            entity.Property(e => e.Includes)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("includes");
            entity.Property(e => e.MaxDays).HasColumnName("max_days");
            entity.Property(e => e.MinDays).HasColumnName("min_days");
            entity.Property(e => e.Offer)
                .HasMaxLength(55)
                .IsUnicode(false)
                .HasColumnName("offer");
            entity.Property(e => e.Passagers).HasColumnName("passagers");
            entity.Property(e => e.PreviousPrice)
                .HasColumnType("decimal(10, 2)")
                .HasColumnName("previous_price");
            entity.Property(e => e.Price)
                .HasColumnType("decimal(10, 2)")
                .HasColumnName("price");
            entity.Property(e => e.ReturnDate)
                .HasColumnType("date")
                .HasColumnName("return_date");
        });

        modelBuilder.Entity<Role>(entity =>
        {
            entity.HasKey(e => e.RoleId).HasName("PK__Roles__CD98462ADC1C890F");

            entity.HasIndex(e => e.RoleName, "UQ__Roles__B1947861BE68D496").IsUnique();

            entity.Property(e => e.RoleId).HasColumnName("roleId");
            entity.Property(e => e.RoleName)
                .HasMaxLength(30)
                .IsUnicode(false)
                .HasColumnName("roleName");
        });

        modelBuilder.Entity<Usuario>(entity =>
        {
            entity.HasKey(e => e.IdUser).HasName("PK__Usuario__D2D14637AA9D046C");

            entity.ToTable("Usuario");

            entity.HasIndex(e => e.Email, "UQ__Usuario__AB6E6164FDE3455C").IsUnique();

            entity.Property(e => e.IdUser).HasColumnName("id_user");
            entity.Property(e => e.Email)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("email");
            entity.Property(e => e.Name)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("name");
            entity.Property(e => e.Password)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("password");
            entity.Property(e => e.RoleId).HasColumnName("roleId");

            entity.HasOne(d => d.Role).WithMany(p => p.Usuarios)
                .HasForeignKey(d => d.RoleId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Usuario__roleId__4CA06362");
        });

        modelBuilder.Entity<Vuelo>(entity =>
        {
            entity.HasKey(e => e.IdVuelo).HasName("PK__Vuelo__CA179BA2FF7C5BAC");

            entity.ToTable("Vuelo");

            entity.Property(e => e.IdVuelo).HasColumnName("id_vuelo");
            entity.Property(e => e.Airline)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("airline");
            entity.Property(e => e.AirplaneIcon)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("airplaneIcon");
            entity.Property(e => e.DateDeparture)
                .HasColumnType("date")
                .HasColumnName("date_departure");
            entity.Property(e => e.DateReturn)
                .HasColumnType("date")
                .HasColumnName("date_return");
            entity.Property(e => e.Days).HasColumnName("days");
            entity.Property(e => e.FromCity)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("from_city");
            entity.Property(e => e.Includes)
                .HasColumnType("text")
                .HasColumnName("includes");
            entity.Property(e => e.Passengers).HasColumnName("passengers");
            entity.Property(e => e.Price)
                .HasColumnType("decimal(10, 2)")
                .HasColumnName("price");
            entity.Property(e => e.Suitcases).HasColumnName("suitcases");
            entity.Property(e => e.ToCity)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("to_city");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
