import './loginpage.css'
import PropTypes from 'prop-types'
import React from 'react'
// import { connect } from 'react-redux'

export const loginpage = (props) => {
  return (
    <div class="container" id="container">
	<div class="form-container sign-up-container">
		<form action="#">
			<h1>Create Account</h1>
			<div class="social-container">
				<a href="#" class="social"><img src="IMAGES/google.png" height="20px" width="20px"/></a>
				<a href="#" class="social"><img src="IMAGES/facebook.png" height="20px" width="20px"/></a>
				<a href="#" class="social"><img src="IMAGES/instagram.png" height="20px" width="20px"/></a>
			</div>
			<span>or use your email for registration</span>
			<input type="text" placeholder="Name" />
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<button>Sign Up</button>
		</form>
	</div>
	<div class="form-container sign-in-container">
		<form action="#">
			<h1>Sign in</h1>
			<div class="social-container">
        <a href="#" class="social"><img src="IMAGES/google.png" height="20px" width="20px"/></a>
				<a href="#" class="social"><img src="IMAGES/facebook.png" height="20px" width="20px"/></a>
				<a href="#" class="social"><img src="IMAGES/instagram.png" height="20px" width="20px"/></a>
			</div>
			<span>or use your account</span>
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<a href="#">Forgot your password?</a>
			<button>Sign In</button>
		</form>
	</div>
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-left">
        <h1>LA's CLOSET</h1>
				<h2>Welcome Back!</h2>
				<p>To keep connected with us please login with your personal info</p>
				<button class="box" id="signIn">Sign In</button>
			</div>
			<div class="overlay-panel overlay-right">
				<h1>LA's CLOSET</h1>
				<p>Enter your personal details and start shopping with us</p>
				<button class="box" id="signUp">Sign Up</button>
			</div>
		</div>
	</div>
</div>
  )
}

// loginpage.propTypes = {
//   second: PropTypes.third
// }

export default loginpage;

// const mapStateToProps = (state) => ({})

// const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(loginpage)