import React from 'react';
import { connect } from 'react-redux';

import { fetchUserDetails } from '../../redux/actions/user.actions';

import './user-section.component.scss';

class UserSection extends React.Component {
    componentDidMount() {
        const { fetchUserDetails } = this.props;
        fetchUserDetails();
    }

    render() {
        const { user_details } = this.props;
        return (
            <div className="user-section">
                <div className="left-user-section">
                    <img src={user_details.profile_image} alt="User Profile" />
                    <div className="user-name">
                        <p>{user_details.user_name}</p>
                        <span>{user_details.first_name + " " + user_details.last_name}</span>
                    </div>
                </div>
                <div className="right-user-section">
                    <span className="switch-button">Switch</span>
                </div>
            </div>
        )
    }
};

const mapDispatchToProps = dispatch => ({
    fetchUserDetails: () => dispatch(fetchUserDetails())
});

const mapStateToProps = state => ({
    user_details: state.userReducer.user.user_details
});

export default connect(mapStateToProps, mapDispatchToProps)(UserSection);