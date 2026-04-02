import Footer from '@/components/layout/Footer';
import './globals.css';
import Header from '@/components/layout/Header';

export const metadata = {
  title: {
    default: 'WLM Plomberie Climatisation',
    template: '%s | WLM Plomberie Climatisation',
  },
  description:
    'Plombier à Nice Ouest. Dépannage, installation, climatisation et pompe à chaleur.',
  keywords: ['plombier nice', 'climatisation nice', 'pompe à chaleur nice'],
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
