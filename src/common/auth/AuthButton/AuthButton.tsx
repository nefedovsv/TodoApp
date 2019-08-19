import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { inject, observer } from "mobx-react";
import { Typography, Button } from "antd";
import styles from "./AuthButton.module.css";

type PropsType = RouteComponentProps & {
  authentication?: any;
};
@inject("authentication")
@observer
class AuthButton extends React.Component<PropsType> {
  render() {
    const { Text } = Typography;
    const { authentication } = this.props;
    const { history } = this.props;
    return authentication.isAuthenticated ? (
      <Text strong className={styles.root}>
        <span className={styles.margin}>Welcome!</span>
        <Button
          type="primary"
          onClick={() => {
            authentication.logOut();
            history.push("/");
            localStorage.clear();
          }}
        >
          LogOut
        </Button>
      </Text>
    ) : (
      <Text strong className={styles.root}>
        You aren't authorised!
      </Text>
    );
  }
}
export default withRouter(AuthButton);