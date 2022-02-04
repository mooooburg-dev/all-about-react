import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import React from "react";
import { FixedSizeList } from "react-window";

export default function VirtualizedListExample() {
  function renderRow(props) {
    const { index, style } = props;

    return (
      <ListItem style={style} key={index} component="div" disablePadding>
        <ListItemButton>
          <ListItemText primary={`Item ${index + 1}`} />
        </ListItemButton>
      </ListItem>
    );
  }

  return (
    <div>
      <FixedSizeList
        height={400}
        width={360}
        itemSize={46}
        itemCount={200}
        overscanCount={5}
      >
        {renderRow}
      </FixedSizeList>
    </div>
  );
}
