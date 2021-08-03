import React from "react";
import { Button } from "antd";
import "./App.css";
import Link from 'next/link'
import { useRouter } from 'next/router'

const App = () => (
  

  <div className="App">
    <div className="Container">
     
     s
     
      <h1>Toca muito!</h1>
      <span>
        Utilize o Soundzera para ter o máximo de desempenho no seu som.
      </span>
      <div>
      <Link href={`/OhmCalc`}><Button type="primary">Buttons</Button></Link>
      </div>
    </div>
  </div>
);

export default App;
