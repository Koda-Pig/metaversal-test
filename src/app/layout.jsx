import "./globals.scss";

export const metadata = {
  title: "Metaversal test",
  description:
    "Test project that dispalys user posts feed and user profiles using dummy data.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-bg-primary">{children}</body>
    </html>
  );
}
