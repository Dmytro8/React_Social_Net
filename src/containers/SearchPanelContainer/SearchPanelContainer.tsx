import { SearchPanel } from "../../components/SearchPanel";
import { connect } from "react-redux";

import { updateSeachField } from "../../redux/usersReducer";
import { AppStateType } from "../../redux/reduxStore";

const mapStateToProps = (state: AppStateType) => {
  return {
    searchField: state.usersData.searchField
  };
};

export const SearchPanelContainer = connect(mapStateToProps, {
  updateSeachField
})(SearchPanel);
