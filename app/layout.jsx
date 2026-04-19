import '../src/index.css';
import '../src/App.css';

export const metadata = {
  title: 'Isha Urkude | Portfolio',
  description: 'Isha Urkude - Frontend Developer & Data Science Student Portfolio',
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
