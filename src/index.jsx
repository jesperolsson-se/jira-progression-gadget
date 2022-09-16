import ApiEpics from "./epics"
import ApiEpic from "./epic";
import ForgeUI, { DashboardGadget, DashboardGadgetEdit, render, Text, useProductContext, useState, Select, Option } from "@forge/ui";

const View = () => {
  const { extensionContext: { gadgetConfiguration } } = useProductContext();
  const summary = useState(async () => await new ApiEpic(gadgetConfiguration.epic).summary())[0];
  const unresolvedChildren = useState(async () => await new ApiEpic(gadgetConfiguration.epic).unresolvedChildren())[0];

  return (
    <DashboardGadget>
      <Text
        content={`${gadgetConfiguration.epic} - ${summary} - ${unresolvedChildren}.`}
      />
    </DashboardGadget>
  );
};


const Edit = () => {
  const onSubmit = values => {
      return values
  };
  return (
    <DashboardGadgetEdit onSubmit={onSubmit}>
      {useState(async () => await epicsSelect())[0]}
    </DashboardGadgetEdit>
  );
}

const epicsSelect = async () => {
  const response = await new ApiEpics().epics();
  const data = await response.json();
  const list = data.issues.map(
    (issue) => <Option label={`${issue.key} ${issue.fields.summary}`} value={issue.key} />
  )
  return <Select label="Epic" name="epic">
        {list}
      </Select>;
};

export const runView = render(
  <View/>
);

export const runEdit = render(<Edit/>)
