import React, { useState } from 'react';

interface IPatrimonio{
  nome:string;
  produto1: number;
  produto2: number;
}

function App() {

  const [tab, setTab] = useState<number>(0)

  const [patrimonio, setPatrimonio] = useState<IPatrimonio[]>([])

  const [produto1, setProduto1] = useState<number>(0)
  const [produto2, setProduto2] = useState<number>(0)
  const [fator, setFator] = useState<number>(0)

  const [input1, setinput1] = useState<number | undefined>()
  const [input2, setinput2] = useState<number | undefined>()
  const [input3, setinput3] = useState<string | undefined>()
  const [trade, settrade] = useState<number | undefined>()

  async function addOffer() {
    if(fator == 0){
      if(input1 == input2){
        setProduto1(input1 as number)    
        setProduto2(input2 as number) 
        setFator((input1 as number) * (input2 as number))  
        setinput1(0)     
        setinput2(0)     
      }else{
        alert("Os valores tem que ser igual!")
      }
    }
  }

  function addPort(){
    const pat = {
      nome : input3,
      produto1 : input1,
      produto2 : input2,
    } as IPatrimonio

    setinput1(0)     
    setinput2(0)      
    setinput3('')     
    setPatrimonio([...patrimonio, pat ]) 
  }

  function calcular(tipo:boolean, prop:IPatrimonio){
    if(!trade){
      alert("informe o valor")
      return
    }

    let p1 = (produto1) ; 
    let p2 = (produto2) ;
    const value = trade as number
   
    if(tipo){
      p1 = (Number(p1) - Number(value))
      p2 = (Number(p2) + Number(value))
    }
    alert(JSON.stringify({v :p1 * p2 ,p1 , p2}))
    if( p1 * p2 === fator){
      setProduto1(p1)    
      setProduto2(p2) 
      setFator( p1 * p2)
    }else{
      alert("qbro meu braço")
    }
  }

  function comprarLaranja(prop:IPatrimonio){
    console.log(Number(trade), Number(prop.produto2))
    if(prop.produto2 <= 0){
      alert(`${ prop.nome} não possui coco!`)
      return;
    } else if (Number(trade) > Number(prop.produto2)){
      alert(`Valor informado maior do que ele possui`)
      return;
    }
    calcular(true, prop)
  }

  function comprarCoco(prop:IPatrimonio){
    console.log(trade, produto1)
    if(prop.produto1 <= 0){
      alert(`${ prop.nome} não possui laranja!`)
      return;
    } else if (Number(trade) < prop.produto1) {
      alert(`Valor informado maior do que ele possui`)
      return;
    }
    calcular(false, prop)
  }


  return (
    <div className='w-screen bg-white'> 
      <div className='flex flex-col h-screen'>
        <div className='border flex w-screen gap-10 justify-center '>
          <span>
            Laranja: {produto1}
          </span>
          <span>
            Coco: {produto2}
          </span>
          <span>
            Fator: {fator}
          </span>
        </div>
        <div className='border flex w-screen flex-col    items-center   bg-slate-300'>

        <nav className="flex border-b border-gray-100 text-sm font-medium">
          <a onClick={() => setTab(0) } className={`-mb-px border-b ${tab === 0 ? "border-current text-cyan-500" : "border-transparent"} p-4 `}>
            Adicionar offer
          </a>

          <a onClick={() => setTab(1) } className={`-mb-px border-b ${tab === 1 ? "border-current text-cyan-500" : "border-transparent"} p-4 `}>
            Criar portifolio
          </a>
 
        </nav>

            <span>Laranja</span>
            <input type="number" value={input1} onChange={(e:any)=> setinput1(e.target.value)} />
            <span>Coco</span>
            <input type="number" value={input2} onChange={(e:any)=> setinput2(e.target.value)} />
            {
              tab === 0  &&
              <button className='p-3 border bg-indigo-700 rounded-lg' onClick={addOffer}>
                Adicionar oferta 
              </button>
            }
            {
              tab === 1  &&
              <>
                <span>Nome</span>
                <input type="text" value={input3} onChange={(e:any)=> setinput3(e.target.value)} />
                <button className='p-3 border bg-indigo-700 rounded-lg' onClick={addPort}>
                  Criar 
                </button>
              </>
            }
        </div>
        <div className='border flex w-screen flex-col    items-center  '>
          <table className="table-fixed max-w-screen-sm w-full">
            <thead>
              <tr>
                <td className='font-bold'>nome</td>
                <td className='font-bold'>Laranja</td>
                <td className='font-bold'>Coco</td>
                <td className='font-bold'>Base Laranja</td>
              </tr>
            </thead>
            <tbody>
              {
                patrimonio.map((value, index) =>
                  <tr key={index}>
                    <td>{value.nome}</td>
                    <td>{value.produto1}</td>
                    <td>{value.produto2}</td>
                    <td className='flex'>
                      <input type="number" className='w-20 ring-2 rounded-lg' value={trade} onChange={(e:any)=> settrade(e.target.value)} />
                      <button onClick={() =>comprarLaranja(value )} className='mx-1 bg-indigo-500 rounded-lg p-1 '>
                        Comprar Laranja
                      </button>
                      <button onClick={() =>comprarCoco(value )} className='mx-1 bg-indigo-500 rounded-lg p-1 '>
                        Comprar Coco 
                      </button>
                    </td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default App;
