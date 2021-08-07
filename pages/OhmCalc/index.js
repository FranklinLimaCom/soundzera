import { useState, useEffect } from 'react'



const OhmCalc = () => {
  // start States
  const [speakers, setSpeakers] = useState([
    { value: '' },
    { value: '' }
  ])

  const [sum, setSum] = useState()

  // end States



  // start Methods
  const equivalentResistance = (resistors) => {
    let circuit = 0
    resistors.forEach(resistor => {
      if (typeof resistor === 'number' && !isNaN(resistor)) return circuit += 1 / resistor
    })
    return (1 / circuit).toFixed(2)
  };

  const addSpeaker = () => {
    setSpeakers([...speakers, { value: '' }])
  }

  const removeSpeaker = (speaker, index) => {
    const dataDelete = [...speakers];
    dataDelete.splice(index, 1);
    setSpeakers([...dataDelete]);
    setSum(equivalentResistance(dataDelete.map(speaker => parseFloat(speaker.value))))
  }

  const setSpeaker = (value, index) => {
    const newSpeakers = speakers
    newSpeakers[index].value = value
    setSpeakers(newSpeakers)
  }

  const onHandleNumber = (event, index) => {
    setSpeaker(event.target.value, index)
    setSum(equivalentResistance(speakers.map(speaker => parseFloat(speaker.value))))
  }

  // end Methods


  return (
    <div className="text-center">
      <h1 className="mt-4">Calcule a impedância dos seus alto-falantes</h1>
      <h1 className="mt-3">{sum} Ω</h1>
      <span>{speakers.length} alto-falantes adicionados</span>
      <div className="container mt-3">
        <div className="SpeakersContainer">
          <div className="row">

            {/* start Speakers loop */}
            {speakers.map((speaker, index) => (
              <div key={index} className="col-md-6">
                <div className="input-group mb-3 animate__animated animate__backInLeft">
                  <span className="input-group-text" id="basic-addon1">Ω</span>
                  <input onChange={event => onHandleNumber(event, index)} value={speaker.value} type="number" className="form-control " placeholder="Impedância" />
                  <div className="input-group-append">
                    <button className="btn btn-danger"onClick={() => removeSpeaker(speaker, index)}><i className="bi bi-trash" /></button>
                  </div>
                </div>
              </div>
            ))}
            {/* end Speakers loop */}

          </div>
        </div>
        <button onClick={addSpeaker} type="button" className="btn btn-primary ActionButton mt-3">Adicionar alto-falante</button>
      </div>
    </div>
  )
}

export default OhmCalc