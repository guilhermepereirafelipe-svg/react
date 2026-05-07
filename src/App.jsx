// function App () {
//   let nome = 'Pereira'
//   return (
//     <div>
//       <h1>Olá, {nome}</h1>
//     </div>
//     // <div>
//     //   <h1>Meu primeiro React</h1>
//     //   <button>clique Aqui</button>
//     // </div>
//   )
// }
// export default App 

import { useState } from "react";

function App () {
  const [numero, setNumero] = useState (0)
  function mais_um () {
    setNumero(numero + 1)
  }
  return (
    <div>
    <h1>{numero}</h1>
    <button onClick={mais_um}>Aumentar</button>
    </div>
  )
}
 export default App