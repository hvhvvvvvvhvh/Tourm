import './globals.css';

export const metadata = {
  title: 'Wanderly Travel & Tours — Explore World',
  description: 'Explore destinations, browse guided tours, read travel inspiration and plan your next journey with Wanderly Travel & Tours.'
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
