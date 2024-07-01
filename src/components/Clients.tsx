import React from 'react'
import Clienttable from './Clienttable'

function Clients() {
  return (
    <div className="cases-container container-grid">
            <h1 className='mb-3'>CASES</h1>
            <div className="cases-grid">
                <div className="case-card">
                    <h3>Total Cases</h3>
                    <p className="case-number">137</p>
                </div>
                <div className="case-card">
                    <h3>Last 30 Days</h3>
                    <p className="case-number">23</p>
                </div>
                <div className="case-card">
                    <h3>Cases Won</h3>
                    <p className="case-number">109</p>
                </div>
                <div className="case-card">
                    <h3>Cases Lost</h3>
                    <p className="case-number">7</p>
                </div>
            </div>
            <Clienttable />
        </div>
  )
}

export default Clients