// import { Inter } from 'next/font/google';

// export const inter = Inter({
//   subsets: ['latin'],
//   display: 'swap',
// });

import { Inter, Lusitana } from 'next/font/google';
 
export const inter = Inter({ subsets: ['cyrillic'] });
export const lusitana = Lusitana({
    subsets: ['latin'],
    weight: '400'
});