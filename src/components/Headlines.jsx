import React from 'react'
import { connect } from 'react-redux/es/exports'

const Headlines = ({headlines}) => {
  return (
    <section>
        <h2>Headlines</h2>
        <div className='stadium'>
            {
                headlines?.map(p=>(
                    <article className='headline'>
                        <div>
                            <img src={p.pic} alt={p.name} />
                            <button>X</button>
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

const mapDispatchToProps = dispatch => ({})


export default connect (mapStateToProps, mapDispatchToProps)(Headlines)