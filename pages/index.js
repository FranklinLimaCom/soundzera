import React from "react";
import { Button } from "antd";

import Link from 'next/link'
import { useRouter } from 'next/router'


const App = () => (
  <div className="App">
    <div className="container">
      <h1>Toca muito!</h1>
      <span>
        Utilize o Soundzera para ter o máximo de desempenho no seu som.
      </span>
      <div className="mt-5">
        <Link href={`/OhmCalc`}>
          <button type="button" className="btn btn-primary">Começar</button>
        </Link>
      </div>
    </div>
  </div>
);

export default App;
