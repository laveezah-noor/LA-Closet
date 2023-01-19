import React from "react";
import './Checkout.css';

export default function Checkout (){
  return(
<div className="checkout" style={{"margin-top":"100px"}}>
        {/* Page Header Start */}
        <div className="container-fluid bg-secondary mb-5">
          <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: '300px'}}>
            <h1 className="font-weight-semi-bold text-uppercase mb-3">Checkout</h1>
            <div className="d-inline-flex">
              <p className="m-0"><a href>Home</a></p>
              <p className="m-0 px-2">-</p>
              <p className="m-0">Checkout</p>
            </div>
          </div>
        </div>
        {/* Page Header End */}
        {/* Checkout Start */}
        <div className="container-fluid pt-5">
          <div className="row px-xl-5">
            <div className="col-lg-8">
              <div className="mb-4">
                <h4 className="font-weight-semi-bold mb-4">Billing Address</h4>
                <div className="row">
                  <div className="col-md-6 form-group">
                    <label>First Name</label>
                    <input className="form-control" type="text" placeholder="John" />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Last Name</label>
                    <input className="form-control" type="text" placeholder="Doe" />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>E-mail</label>
                    <input className="form-control" type="text" placeholder="example@email.com" />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Mobile No</label>
                    <input className="form-control" type="text" placeholder="+123 456 789" />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Address Line 1</label>
                    <input className="form-control" type="text" placeholder="123 Street" />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Address Line 2</label>
                    <input className="form-control" type="text" placeholder="123 Street" />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Country</label>
                    <select className="custom-select">
                      <option selected>United States</option>
                      <option>Afghanistan</option>
                      <option>Albania</option>
                      <option>Algeria</option>
                    </select>
                  </div>
                  <div className="col-md-6 form-groupbu">
                    <label>City</label>
                    <input className="form-control" type="text" placeholder="New York" />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>State</label>
                    <input className="form-control" type="text" placeholder="New York" />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>ZIP Code</label>
                    <input className="form-control" type="text" placeholder={123} />
                  </div>
                  <div className="col-md-12 form-group">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="newaccount" />
                      <label className="custom-control-label" htmlFor="newaccount">Create an account</label>
                    </div>
                  </div>
                  <div className="col-md-12 form-group">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="shipto" />
                      <label className="custom-control-label" htmlFor="shipto" data-toggle="collapse" data-target="#shipping-address">Ship to different address</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="collapse mb-4" id="shipping-address">
                <h4 className="font-weight-semi-bold mb-4">Shipping Address</h4>
                <div className="row">
                  <div className="col-md-6 form-group">
                    <label>First Name</label>
                    <input className="form-control" type="text" placeholder="John" />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Last Name</label>
                    <input className="form-control" type="text" placeholder="Doe" />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>E-mail</label>
                    <input className="form-control" type="text" placeholder="example@email.com" />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Mobile No</label>
                    <input className="form-control" type="text" placeholder="+123 456 789" />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Address Line 1</label>
                    <input className="form-control" type="text" placeholder="123 Street" />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Address Line 2</label>
                    <input className="form-control" type="text" placeholder="123 Street" />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Country</label>
                    <select className="custom-select">
                      <option selected>United States</option>
                      <option>Afghanistan</option>
                      <option>Albania</option>
                      <option>Algeria</option>
                    </select>
                  </div>
                  <div className="col-md-6 form-group">
                    <label>City</label>
                    <input className="form-control" type="text" placeholder="New York" />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>State</label>
                    <input className="form-control" type="text" placeholder="New York" />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>ZIP Code</label>
                    <input className="form-control" type="text" placeholder={123} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card border-secondary mb-5">
                <div className="card-header bg-secondary border-0">
                  <h4 className="font-weight-semi-bold m-0">Order Total</h4>
                </div>
                <div className="card-body">
                  <h5 className="font-weight-medium mb-3">Products</h5>
                  <div className="d-flex justify-content-between">
                    <p>Colorful Stylish Shirt 1</p>
                    <p>$150</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p>Colorful Stylish Shirt 2</p>
                    <p>$150</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p>Colorful Stylish Shirt 3</p>
                    <p>$150</p>
                  </div>
                  <hr className="mt-0" />
                  <div className="d-flex justify-content-between mb-3 pt-1">
                    <h6 className="font-weight-medium">Subtotal</h6>
                    <h6 className="font-weight-medium">$150</h6>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-medium">Shipping</h6>
                    <h6 className="font-weight-medium">$10</h6>
                  </div>
                </div>
                <div className="card-footer border-secondary bg-transparent">
                  <div className="d-flex justify-content-between mt-2">
                    <h5 className="font-weight-bold">Total</h5>
                    <h5 className="font-weight-bold">$160</h5>
                  </div>
                </div>
              </div>
              <div className="card border-secondary mb-5">
                <div className="card-header bg-secondary border-0">
                  <h4 className="font-weight-semi-bold m-0">Payment</h4>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <div className="custom-control custom-radio">
                      <input type="radio" className="custom-control-input" name="payment" id="paypal" />
                      <label className="custom-control-label" htmlFor="paypal">Paypal</label>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="custom-control custom-radio">
                      <input type="radio" className="custom-control-input" name="payment" id="directcheck" />
                      <label className="custom-control-label" htmlFor="directcheck">Direct Check</label>
                    </div>
                  </div>
                  <div className>
                    <div className="custom-control custom-radio">
                      <input type="radio" className="custom-control-input" name="payment" id="banktransfer" />
                      <label className="custom-control-label" htmlFor="banktransfer">Bank Transfer</label>
                    </div>
                  </div>
                </div>
                <div className="card-footer border-secondary bg-transparent">
                  <button className="btn btn-lg  btn-primary font-weight-bold my-3 py-3">Place Order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Checkout End */}
      </div>
        )
}

function Checkout2 ()  {
    return(
        <div className="checkout body">
            <div className="row">
        <div className="col-75">
          <div className="container">
            <div className="row">
              <div className="col-50">
                <h3>Billing Details</h3>
                <label htmlFor="fname"><i className="fa fa-user" /> Full Name</label>
                <input required type="text" id="fname" name="fullname" placeholder="Mr abc" onkeyup="change();" />
                <label htmlFor="email"><i className="fa fa-envelope" /> Email</label>
                <input type="text" id="email" name="email" placeholder="abc123@example.com" required />
                <label htmlFor="adr"><i className="fa fa-address-card-o" /> Address</label>
                <input type="text" id="adr" name="address" placeholder="456, street #12 " />
                <label htmlFor="city"><i className="fa fa-institution" /> City</label>
                <input type="text" id="city" name="city" placeholder="Karachi" />
                <div className="row">
                  <div className="col-50">
                    <label htmlFor="state">State</label>
                    <input type="text" id="state" name="state" placeholder="DE" />
                  </div>	
                  <div className="col-50">
                    <label htmlFor="plz">Postal Code</label>
                    <input type="text" id="plz" name="plz" placeholder={99999} />
                  </div>
                </div>
              </div>
              <div className="col-50">
                <h2>Choose a Payment Method</h2>
                <div className="tab">
                  <button type="button" id="defaultOpen" className="tablinks" onclick="openPaymentType(event, 'BankTransfer')">Cash on delivery</button>
                  <button type="button" className="tablinks" onclick="openPaymentType(event, 'CardPayment')">Card Payment</button>
                </div>
                {/* Tab content */}
                {/* <div id="BankTransfer" class="tabcontent">

<div class="row">
	<div class="col-10">
		<input type="radio" id="bt1" name="bt" value="GiroPay" checked> 
		</div>
	<div class="col-90">	
		<label for="bt1">GiroPay</label>
	</div>
</div>
<div class="row">
<div class="col-10">
		<input type="radio" id="bt2" name="bt" value="Sofort">
		</div>
		<div class="col-90">
		<label for="bt2">Sofort</label>
		</div>
</div>
</div> */}
                <div id="CardPayment" className="tabcontent">
                  <h3>Payment</h3>
                  <label htmlFor="fname">Accepted Cards</label>
                  <div className="icon-container">
                    <i className="fa fa-cc-visa" style={{color: 'navy'}} />
                    <i className="fa fa-cc-amex" style={{color: 'blue'}} />
                    <i className="fa fa-cc-mastercard" style={{color: 'red'}} />
                    <i className="fa fa-cc-discover" style={{color: 'orange'}} />
                  </div>
                  <label htmlFor="cname">Name on Card</label>
                  <input type="text" id="cname" name="cardname" placeholder="John More Doe" />
                  <label htmlFor="ccnum">Credit card number</label>
                  <input type="number" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
                  <div id="warning" />
                  <label htmlFor="expmonth">Exp Month</label>
                  <input type="number" id="expmonth" name="expmonth" placeholder="MM" max={12} />
                  <div className="row">
                    <div className="col-50">
                      <label htmlFor="expyear">Exp Year</label>
                      <input type="number" id="expyear" name="expyear" placeholder="YYYY" maxLength={4} />
                    </div>
                    <div className="col-50">
                      <label htmlFor="cvv">CVV</label>
                      <input type="text" id="cvv" name="cvv" placeholder={352} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <input type="submit" defaultValue="Continue to checkout" className="btn" onclick="submit()" />
          </div>
        </div>
        <div className="col-25">
          <div className="container">
            <h4>Cart <span className="price" style={{color: 'black'}}><i className="fa fa-shopping-cart" /> <b>4</b></span></h4>
            <p><a href="#">Blue T-Shirt</a> <span className="price">$15</span></p>
            <p><a href="#">Black T-Shirt</a> <span className="price">$5</span></p>
            <p><a href="#">White T-Shirt</a> <span className="price">$8</span></p>
            <p><a href="#">Yellow T-Shirt</a> <span className="price">$2</span></p>
            <hr />
            <p>Total <span className="price" style={{color: 'black'}}><b>$30</b></span></p>
          </div>
        </div>
      </div>
        </div>
    )
}