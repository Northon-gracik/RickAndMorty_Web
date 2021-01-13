import React, { useState } from 'react'

import './episode.css'

import Episode from './Episode';
import episodios from './data/episodios'

export default props => {
    

    return(
            <div className="s"> 
                <div >
                    {episodios.map(ep => {
                        return <Episode key={ep.id} eps={ep}/>
                    })}
                    
                </div>
            </div>
    )
 }