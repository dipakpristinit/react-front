import React, { Component } from 'react'

export default class GetStart extends Component {
  render() {
    return (
      <section className="get-start">
        <div className="container">
            <div className="box-full-size">
                <div className="row align-items-center">
                    <div className="col-lg-9">
                        <h2 className="title">Let’s Get Started!</h2>
                        <p>Mauris blandit arcu nec tellus lobortis, vitae aliquam lectus varius. Nunc
                            <br />sed magna ac nisi ultrices aliquam a ac turpis. Proin sagittis vel ipsum
                            <br />vitae luctus.</p>
                    </div>
                    <div className="col-lg-3"> <a href="#" className="btn btn-white lg mr-3">Contact Us Now</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
  }
}
