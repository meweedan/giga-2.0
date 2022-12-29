import React from 'react'
import Articles from '../hooks/Articles'

export default function Article() {
    
  return (
    <React.Fragment>
<section className="gallery-section ptb-120">
    <div className="sorting-area"  id='article'><h1 className='title'>Articles</h1>
        <div className="row justify-content-center mb-60-none">
            <div className="col-xl-8 col-lg-8 mb-60">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 mb-60">
                        <Articles />
                    </div>
            </div>
        </div>
    </div>
 </section> 
    </React.Fragment>
  )
}
