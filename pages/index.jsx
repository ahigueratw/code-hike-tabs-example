import CodeHike from './codehike.mdx';
import { TabPanels, Tabs, TabPanel, Tab, TabList } from '@twilio-paste/tabs';

export default function About() {
  return (
    <div>
      <Tabs>
        <TabList aria-label='Horizontal tabs'>
          <Tab> First tab </Tab>
          <Tab> Second tab </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <CodeHike />
          </TabPanel>
          <TabPanel>Some Additional content</TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
