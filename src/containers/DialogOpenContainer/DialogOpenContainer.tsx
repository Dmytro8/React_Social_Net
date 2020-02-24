import React from "react";
import { connect } from "react-redux";

import { DialogOpen } from "../../components/MessagesComponents/DialogOpen";
import { sendMessage, UserDataType } from "../../redux/usersReducer";
import { AppStateType } from "../../redux/reduxStore";

// type MapStatePropsType = {
//   usersData: Array<UserDataType>;
// };
type MapDispatchPropsType = {
  sendMessage: (userId: string, newMessageBody: string) => void;
};
type OwnPropsType = {
  user: UserDataType;
};
type PropsType = OwnPropsType & MapDispatchPropsType;

export const DialogOpenContainer: React.FC<PropsType> = props => {
  return (
    <DialogOpen
      userId={props.user.id}
      name={props.user.name}
      surname={props.user.surname}
      messages={props.user.messages}
      sendMessage={props.sendMessage}
    />
  );
};

const mapStateToProps = (state: AppStateType) => {
  return {
    usersData: state.usersData
  };
};

export default connect<{}, MapDispatchPropsType, OwnPropsType, AppStateType>(
  mapStateToProps,
  { sendMessage }
)(DialogOpenContainer);
