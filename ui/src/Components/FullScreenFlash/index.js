import React, { Component } from "react";
import PropTypes from "prop-types";

import { observer } from "mobx-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation } from "@fortawesome/free-solid-svg-icons/faExclamation";

import { AlertStore } from "Stores/AlertStore";
import { Settings } from "Stores/Settings";
import { MountFlash } from "Components/Animations/MountFlash";

import "./index.css";

const FullScreenFlash = observer(
  class FullScreenFlash extends Component {
    static propTypes = {
      alertStore: PropTypes.instanceOf(AlertStore).isRequired,
      settingsStore: PropTypes.instanceOf(Settings).isRequired
    };

    render() {
      const { alertStore } = this.props;

      return (
        <MountFlash
          in={alertStore.info.lastAlertsUpdateTimestamp !== null}
          key={alertStore.info.lastAlertsUpdateTimestamp}
        >
          <div className="p-5 text-center components-flash">
            <h1 className="m-auto p-5 text-danger">
              <FontAwesomeIcon icon={faExclamation} size="8x" />
            </h1>
          </div>
        </MountFlash>
      );
    }
  }
);

export { FullScreenFlash };
