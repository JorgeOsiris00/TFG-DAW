using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Backend.Model;

namespace Backend.DAL.DBContext;

public partial class DojosContext : DbContext
{
    public DojosContext()
    {
    }

    public DojosContext(DbContextOptions<DojosContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Alumno> Alumnos { get; set; }

    public virtual DbSet<Dojo> Dojos { get; set; }

    public virtual DbSet<Maestro> Maestros { get; set; }

    public virtual DbSet<Usuario> Usuarios { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) { }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Alumno>(entity =>
        {
            entity.HasKey(e => e.IdAlumno).HasName("PK__Alumnos__3213E83F64AE2B3F");

            entity.Property(e => e.IdAlumno).HasColumnName("id");
            entity.Property(e => e.Apellido)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("apellido");
            entity.Property(e => e.Categoria)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("categoria");
            entity.Property(e => e.CodigoAlumno)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("codigoAlumno");
            entity.Property(e => e.Correo)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("correo");
            entity.Property(e => e.Dojo)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("dojo");
            entity.Property(e => e.Genero)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("genero");
            entity.Property(e => e.Nombre)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("nombre");
            entity.Property(e => e.Rango)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("rango");
            entity.Property(e => e.Tlf)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("tlf");
        });

        modelBuilder.Entity<Dojo>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Dojos__3213E83F36DFF1DC");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Calle)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("calle");
            entity.Property(e => e.Dojo1)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("dojo");
            entity.Property(e => e.Domicilio)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("domicilio");
            entity.Property(e => e.Nombre)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("nombre");
            entity.Property(e => e.Pais)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("pais");
        });

        modelBuilder.Entity<Maestro>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Maestros__3213E83F3B5B9FFF");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Apellido)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("apellido");
            entity.Property(e => e.CodigoMaestro)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("codigoMaestro");
            entity.Property(e => e.Correo)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("correo");
            entity.Property(e => e.Dojo)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("dojo");
            entity.Property(e => e.Genero)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("genero");
            entity.Property(e => e.Nombre)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("nombre");
            entity.Property(e => e.Rango)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("rango");
            entity.Property(e => e.Tlf)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("tlf");
        });

        modelBuilder.Entity<Usuario>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Usuarios__3213E83F4CBF7A10");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Password)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("contraseña");
            entity.Property(e => e.Correo)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("correo");
            entity.Property(e => e.Dojo)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("dojo");
            entity.Property(e => e.Nombre)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("nombre");
            entity.Property(e => e.Rol)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("rol");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
