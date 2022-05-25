import React from 'react'
import { connect } from 'react-redux/es/exports'

const Substitutes = ({substitutes}) => {
    return (
        <section>
            <h2>Substitutes</h2>
            <div className='substitutes'>
                {
                    substitutes?.map(p=>(
                        <article className='substitute'>
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
        substitutes: state.players
    })
    
    const mapDispatchToProps = dispatch => ({})
    
    
    export default connect (mapStateToProps, mapDispatchToProps)(Substitutes)