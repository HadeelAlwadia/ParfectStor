import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { TabComponent, WrapperTab, Line, Button } from "./Tabs.style";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
interface VerticalTabsProps {
  children?: React.ReactNode;
  labels: Array<any>;
  content: Array<React.ReactNode>;
  button?: string;
  buttonClick?: React.MouseEventHandler;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs(props: VerticalTabsProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <WrapperTab>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs "
        sx={{ borderColor: "divider" }}
      >
        {props.labels.map((label, index) => (
          <Tab label={label} {...a11yProps(index)} />
        ))}
        <Line />
        <Button onClick={props.buttonClick}>{props.button}</Button>
      </Tabs>
      <TabComponent>
        {props.content.map((comp, i) => (
          <TabPanel value={value} index={i}>
            {comp}
          </TabPanel>
        ))}
      </TabComponent>
    </WrapperTab>
  );
}
