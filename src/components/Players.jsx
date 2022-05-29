import React from 'react'
import {connect} from 'react-redux'


const Players = ({players, addHeadline, addSubtitute}) => {
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