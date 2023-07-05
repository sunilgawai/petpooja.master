
const DeliveryComponent = () => {
  return (
    <div className="col-lg-5">
      <div className="d-flex delivery-box">
        <div className="card" style={{ maxWidth: '100%' }}>
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Dine In </button>
              <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Delivery</button>
              <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Pick Up</button>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade active show" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
              <div className="dine-tab">
                <ul>
                  <li><img src="img/dine-icon01.png" alt="" /></li>
                  <li><img src="img/dine-icon02.png" alt="" /></li>
                  <li><img src="img/dine-icon03.png" alt="" /></li>
                  <li><img src="img/dine-icon04.png" alt="" /></li>
                </ul>

                <div className="dine-button"><a href="#" className="btn">Dine In</a></div>
              </div>


              <div className="table-item-total">
                <div className="table-rasponsibe">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Item</th>
                        <th>Check Items</th>
                        <th>QTY.</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <div className="no-item">
                          <td colSpan={4}>
                            <h6>No Item Selected</h6>
                            <p>Please Select Item From Left Menu Item </p>
                          </td>
                        </div>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>


              <div className="bottom-select-menu">
                <div className="menu-total">
                  <a href="#" className="btn">Spit</a>

                  <div className="total-text">Total <span>0</span></div>
                </div>

                <div className="menu-radio">
                  <label className="radio">
                    <input type="radio" id="radio1" name="radio1" value="RadioButton1" checked />
                    <span>Case</span>
                  </label>

                  <label className="radio">
                    <input type="radio" id="radio2" name="radio1" value="RadioButton2" />
                    <span>Card</span>
                  </label>
                  <label className="radio">
                    <input type="radio" id="radio3" name="radio1" value="RadioButton3" checked />
                    <span>Due</span>
                  </label>

                  <label className="radio">
                    <input type="radio" id="radio4" name="radio1" value="RadioButton4" />
                    <span>Other</span>
                  </label>
                  <label className="radio">
                    <input type="radio" id="radio4" name="radio1" value="RadioButton5" />
                    <span>Part</span>
                  </label>
                </div>


                <div className="menu-check-box">
                  <label className="checkbox">
                    <input type="checkbox" id="radio4" name="radio1" value="RadioButton5" />
                    <span>It's Paid</span>
                  </label>
                </div>


                <div className="menu-button">
                  <a href="#" className="btn gray-color">Save Print</a>
                  <a href="#" className="btn gray-color">Save &eBill</a>
                  <a href="#" className="btn gray-color">KOT & Print </a>
                  <a href="#" className="btn gray-color">Hold</a>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
              <p><strong>This is some placeholder content the Profile tab's associated content.</strong>
                Clicking another tab will toggle the visibility of this one for the next.
                The tab JavaScript swaps classes to control the content visibility and styling. You can use it with
                tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
            </div>
            <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
              <p><strong>This is some placeholder content the Contact tab's associated content.</strong>
                Clicking another tab will toggle the visibility of this one for the next.
                The tab JavaScript swaps classes to control the content visibility and styling. You can use it with
                tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeliveryComponent;