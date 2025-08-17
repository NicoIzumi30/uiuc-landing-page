import { Inter, Albert_Sans } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400'] // regular
});

const albertSans = Albert_Sans({
  subsets: ['latin'],
  variable: '--font-albert-sans',
  weight: ['400', '600', '700'] // regular, semibold, bold
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${inter.variable} ${albertSans.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}