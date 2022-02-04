import React, { useState } from "react";
import { Alert, DatePicker, message } from "antd";

export default function GetStart() {
  const [date, setDate] = useState(null);
  const handleChange = (value) => {
    message.info(
      `Selected Date: ${value ? value.format("YYYY-MM-DD") : "None"}`
    );
    setDate(value);
  };

  return (
    <div style={{ width: 400, margin: "100px auto" }}>
      <DatePicker onChange={handleChange} />
      <div style={{ marginTop: 16 }}>
        <Alert
          message="Selected Date"
          description={date ? date.format("YYYY-MM-DD") : "None"}
        />
      </div>
    </div>
  );
}
