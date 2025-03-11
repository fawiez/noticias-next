"use client";

import { signOut, useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();

  if (!session) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h1>Bem-vindo, {session.user?.name}</h1>
      <p>Email: {session.user?.email}</p>
      <button onClick={() => signOut()}>Sair</button>
    </div>
  );
}


