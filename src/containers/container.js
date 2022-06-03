import { connect } from "react-redux";
import Sidebar from "../component/sidebar/sidebar";
import Chat from "../component/chat/chat";
import { selectUser } from "../services/actions/action";
// import Join from "../component/join/join";

const mapStateToProps = (state) => ({
  userData: state,
});

const mapDispatchToProps = (dispatch) => ({
  selectUserHandler: (data) => dispatch(selectUser(data)),
});

export default connect("", mapDispatchToProps)(Sidebar);
export const Chatbar = connect(mapStateToProps)(Chat);
