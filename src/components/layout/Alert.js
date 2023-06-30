import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Pass in the alerts
const Alert = ({ alerts }) => {
  // If there are alerts, map through them and display them.
  return (alerts !== null && alerts.length > 0 && alerts.map( alert =>
    // The alert-type will determine the colour of the alert.
    (
      <div key={alert.id} className={`mt-4 alert alert-${alert.alertType}`} >
        {alert.msg}
      </div>
    ))
  );
};

// PropTypes
Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

// Map state to props.
const mapStateToProps = state => ({
  alerts: state.alert
});

// Export with connect
export default connect(mapStateToProps)(Alert);