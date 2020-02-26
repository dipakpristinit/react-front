import React, { Component } from 'react'

export default class ProductFeature extends Component {
  render() {
    return (
      <section className="section product-features product-back">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="small-title">What We Do</div>
                    <h2 className="title">Our Product Features</h2>
                    <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat
                        <br />nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue
                        <br />duis dolore te feugait nulla facilisi.</p>
                    <div className="btn-grp"> <a href="" className="btn btn-white mr-3">Start Today</a>  <a href="" className="btn btn-white btn-purple">Free Trial</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
  }
}
