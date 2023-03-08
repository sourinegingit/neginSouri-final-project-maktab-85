import * as React from "react";
import Radio from "@mui/material/Radio";


export default function RadioButtons() {
  const [selectedValue, setSelectedValue] = React.useState("a");
  const handleChange = (event) => {
    setSelectedValue(event.target.value);

  };
  return (
    <div>
        <label>سفارش تحویل شده</label>
      <Radio
        checked={selectedValue === "isDelivered"}
        onChange={handleChange}
        value="true"
        name="radio-buttons"
        inputProps={{ "aria-label": "isDelivered" }}
      />
    <label>سفارش تحویل نشده</label>

      <Radio
        checked={selectedValue === "notDelivered"}
        onChange={handleChange}
        value="false"
        name="radio-buttons"
        inputProps={{ "aria-label": "notDelivered" }}
      />
    </div>
  );
}
