import React from 'react'
import { connect } from 'react-redux/es/exports'

const Headlines = ({headlines, quitHeadline}) => {
  return (
    <section>
        <h2>Headlines</h2>
        <div className='stadium'>
            {
                headlines?.map(p=>(
                    <article className='headline' key={p.id}>
                        <div>
                            <img src={p.pic} alt={p.name} />
                            <button onClick={()=> quitHeadline(p)}>X</button>
                        </div>
                        <p>{p.name}</p>
                    </article>
                ))
            }
        </div>
    </section>
  )
}

const mapStateToProps = state =>({
    headlines: state.players
})

const mapDispatchToProps = dispatch => ({
    quitHeadline(player){
        dispatch({
            type: 'QUIT_HEADLINE',
            player
        })
    }
})


export default connect (mapStateToProps, mapDispatchToProps)(Headlines)