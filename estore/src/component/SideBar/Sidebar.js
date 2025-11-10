import React from 'react'
import './_side-bar.scss'

function Sidebar() {
  return (
    <div className='side-bar'>
        <div className="category">
            Category
        </div>
        <div className='accordian'>
            <div className='accordian-items'>
                <div className='acoordian-header'>
                    <div className='accordian-button'>
                        <div className='category-title'>
                            <a href="#">Men</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      
    </div>
  )
}

export default Sidebar
