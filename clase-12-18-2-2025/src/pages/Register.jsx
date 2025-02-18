import { useState } from "react";

// Personalizar la página de registro
const Register = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("usuario para registrar:", form);
  };

  return (
    <div className="container mt-5">
      <h1 className="title has-text-centered">Registro de Usuario</h1>
      <form onSubmit={handleSubmit} className="box">
        <div className="field">
          <label className="label">Nombre</label>
          <div className="control">
            <input
              className="input"
              name="firstName"
              placeholder="Nombre"
              onChange={handleChange}
              value={form.firstName}
              required
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Apellido</label>
          <div className="control">
            <input
              className="input"
              name="lastName"
              placeholder="Apellido"
              onChange={handleChange}
              value={form.lastName}
              required
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={form.email}
              required
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Contraseña</label>
          <div className="control">
            <input
              className="input"
              type="password"
              name="password"
              placeholder="Contraseña"
              onChange={handleChange}
              value={form.password}
              required
            />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <button type="submit" className="button is-primary is-fullwidth">
              Registrar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export { Register };
