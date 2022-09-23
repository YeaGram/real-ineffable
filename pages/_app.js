import "../styles/globals.css";

import Header from "../components/header";
import LoginForm from "../components/login";
import { useState } from "react";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }) {
  const [ShowForm, setShowForm] = useState(false);
  function handleForm() {
    setShowForm(ShowForm ? false : true);
  }

  return (
    <>
      <LoginForm FormState={ShowForm} FormHandle={handleForm} />
      <Header FormHandle={handleForm} />
      <Component {...pageProps} />
      <div className="w-full overflow-x-hidden">
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
