export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <h1>Central de notícias</h1>
      {children}
    </section>
  );
}
