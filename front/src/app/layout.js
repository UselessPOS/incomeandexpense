
import "./globals.css";

export const metadata = {
  title: "Income and Expense tracker",
  description: "Keep your finances in check",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
