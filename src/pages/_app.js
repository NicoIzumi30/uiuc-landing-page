import { Inter, Albert_Sans } from 'next/font/google';
import '../styles/globals.css';
import Chatbot from '../components/Chatbot';
import { LanguageProvider } from '../context/LanguageContext';

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
    <LanguageProvider>
      <div className={`${inter.variable} ${albertSans.variable}`}>
        <Component {...pageProps} />
        <Chatbot />
      </div>
    </LanguageProvider>
  );
}