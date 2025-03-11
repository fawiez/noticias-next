"use client";

import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          signIn("credentials", {
            email: formData.get("email"),
            password: formData.get("password"),
            redirect: true,
            callbackUrl: "/dashboard",
          });
        }}
      >
        <input name="email" type="email" placeholder="E-mail" required />
        <input name="password" type="password" placeholder="Senha" required />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}


