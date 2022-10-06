import { Button } from "../src";

export default {
  title: "My Button",
  component: Button,
};

const Template = (args) => ({});

const PrimaryButton = Template.bind({});

PrimaryButton.args = {
  variant: "primary",
};

export const Primary = {
  args: {
    variant: "primary",
    children: "Click Me",
  },
};
