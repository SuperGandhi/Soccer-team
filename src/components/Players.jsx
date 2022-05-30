import React from 'react'
import {connect} from 'react-redux'


const Players = ({players, addHeadline, addSubtitute}) => {
  const gridJugadores = createRef()

  useEffect(() => {
    setScrollContainer()
    document.addEventListener('click', setScrollContainer)
  }, []) 
  
  // Función que fija el tamaño del grid de los jugadores
  const setScrollContainer = (desktop = true) => {
    let container = gridJugadores.current
    if (container) {
      const generatedGrid = () => {
        let items = container.getElementsByClassName('jugador')
        let itemsLength = items.length
        let bp = window.matchMedia("(min-width: 640px)").matches ? window.matchMedia("(min-width: 1024px)").matches ? 4 : 2 : 1

        const getWidth = () => {
          let n = bp + (itemsLength > bp ? 0.3 : 0)
          return (itemsLength / n) * 100
        }
        return `
                display: grid;
                grid-template-columns: repeat(${itemsLength}, 225px);
                grid-gap: 1rem;
                width : ${getWidth()}%;
              `
      }
      let styles = !desktop && window.matchMedia("(min-width: 1024px)").matches ? `display: grid; grid-row-gap: 1rem;` : generatedGrid()
      container.setAttribute('style', styles)
    }
  }
  return (
    <section>
      <h2>Players</h2>
      <div className="container-players">
        {
          players?.map(p=>(
              <article className='players' key={p.id}>
                <img src={p.pic} alt={p.name} />
                <h3>{p.name}</h3>
                <div>
                  <button onClick={() => addHeadline(p)}>Headline</button>
                  <button onClick={()=> addSubtitute(p)}>Subtitute</button>
                </div>
              </article>
          ))
        }
      </div>
    </section>
  )
}

const mapStateToProps = state =>({
    players: state.players
})

// functions that are converted by properties
const mapDispatchToProps = dispatch => ({
  addHeadline(player){
    dispatch({
      type: 'ADD_HEADLINE',
      player
    })
  },
  addSubtitute(player){
    dispatch({
      type: 'ADD_SUBTITUTE',
      player
    })
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(Players)