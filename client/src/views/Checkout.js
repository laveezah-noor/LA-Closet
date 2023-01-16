import React from "react";
import './Checkout.css';

export default function Checkout ()  {
    return(
        <div className="body">
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