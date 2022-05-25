import React from 'react'
import {connect} from 'react-redux'


const Players = ({players}) => {
  return (
    <section>
      <h2>Players</h2>
      <div className="container-players">
        {
          players?.map(p=>(
              <article className='players'>
                <img src={p.pic} alt={p.name} />
                <h3>{p.name}</h3>
                <div>
                  <button onClick={() => addHeadline(p)}>Headline</button>
                  <button>Subtitute</button>
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


const mapDispatchToProps = dispatch => ({})


export default connect(mapStateToProps, mapDispatchToProps)(Players)