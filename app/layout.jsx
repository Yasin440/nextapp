import './../styles/globals.css';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
// import ReduxStoreProvider from '@/components/provider/ReduxStoreProvider';
import { Provider } from 'react-redux';
import store from '../redux/store/store';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Stream AI Music',
  description: 'Generated by Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Provider store={store}>
          {children}
          <Toaster />
        </Provider>
      </body>
    </html>
  );
}
