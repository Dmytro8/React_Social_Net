import { SearchPanel } from "../../components/SearchPanel";
import { connect } from "react-redux";

import { updateSeachField } from "../../redux/usersReducer";

const mapStateToProps = state => {
  return {
    searchField: state.usersData.searchField
  };
};

export const SearchPanelContainer = connect(mapStateToProps, {
  updateSeachField
})(SearchPanel);
