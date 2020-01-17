import React from "react";

import classes from "./ProfileStatus.module.scss";

export class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  };

  activateEditMode = () => {
    console.log("this: " + this);
    this.setState({
      editMode: true
    });
  };
  deactivateEditMode = () => {
    this.setState({
      editMode: false
    });
  };
  updateNewStatusText = e => {
    this.setState({
      status: e.target.value
    });
  };
  // componentDidUpdate = (prevProps, prevState) => {
  //   if (prevProps.status !== this.props.status) {
  //     this.setState({
  //       state: this.props.status
  //     });
  //   }
  // };
  render() {
    return (
      <div className={classes.profileStatusWrapper}>
        {!this.state.editMode && (
          <div className={classes.profileStatus}>
            {this.props.status && (
              <h4 onClick={this.activateEditMode}>{this.props.status}</h4>
            )}
            {(this.props.status === "" || !this.props.status) && (
              <h4 onClick={this.activateEditMode}>set a status message</h4>
            )}
          </div>
        )}
        {this.state.editMode && (
          <div className={classes.profileStatusFocus}>
            <div className={classes.profileStatusFocusWrapper}>
              <div className={classes.statusInput}>
                <input
                  type="text"
                  value={this.state.status}
                  placeholder="set a status message"
                  autoFocus={true}
                  onChange={this.updateNewStatusText}
                />
              </div>
              <div className={classes.statusSave}>
                <button onClick={this.deactivateEditMode}>Save</button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
