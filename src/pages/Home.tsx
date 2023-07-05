import SearchBar from '../components/header/SearchBar';
import CategoryList from '../components/items/CategoryList';
import ProductList from '../components/items/ProductList';
import Cart from '../components/cart/Cart';
import Header from '../components/header/Header';

const Home = () => {

  return (
    <>
      <Header />
      <div className="content-area-bg">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7">
              <div className="conent-lft">

                {/* Search Bar to filer by name & code.  */}
                <SearchBar />

                <div className="item-table-bg">
                  <div className="d-flex ">
                    <div className="card bg-light" style={{ maxWidth: '100%' }}>

                      {/* List of categories  */}
                      <CategoryList />

                      {/* List of products  */}
                      <ProductList />

                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Delivery section --> */}
            {/* <DeliveryComponent /> */}
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

                    {/* Cart Section  */}
                    <Cart />


                    {/* <CustomerDetails /> */}
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
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;