import * as React from "react";

import { format } from "../utils";

export default ({ time }) => (
  <div className="clock">
    <p>{format(time)}</p>
  </div>
);
