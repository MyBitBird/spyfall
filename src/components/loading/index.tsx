import React, { useState } from "react";
import { LinearProgress } from "@material-ui/core";
import { onLoadingChangedEvent } from "../../services/api";

const Loading = () => {
  const [loading, setLoading] = useState(false);

  const handleLoading = (result: Boolean) => {
    result ? setLoading(true) : setLoading(false);
  };

  onLoadingChangedEvent(handleLoading);
  return loading ? <LinearProgress color="secondary" /> : null;
};

export default Loading;
