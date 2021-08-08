import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

const Payments = (props) => {
  return (
    <StripeCheckout
      name="Emaily"
      description="$5 for 5 email credits"
      amount={500}
      token={(token) => props.handleToken(token)}
      // stripeKey={process.env.REACT_APP_STRIPE_KEY}
      stripeKey="pk_test_wd6JOemZHTRKYwKJiobuPppm"
    >
      <button className="btn btn-primary">Add Credits</button>
    </StripeCheckout>
  );
};

export default connect(null, actions)(Payments);
