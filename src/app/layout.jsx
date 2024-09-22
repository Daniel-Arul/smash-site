import cssLayout from './globals.css';
import styles from './home.module.css'
import Home from './page';
import Header from './components/header/header';

export const metadata = {
  title: "Clash At Carleton",
  description: "Official Clash at Carleton Website!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link
        rel="icon"
        href="/assets/darkBG.png"
        type="image/<generated>"
        sizes="<generated>"
      />
      </head>
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
