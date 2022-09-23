import "../styles/globals.css";

import Header from "../components/header";
import LoginForm from "../components/login";
import { useState } from "react";

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
    </>
  );
}

export default MyApp;
