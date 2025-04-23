
import MainLayout from '@/components/layout/main-layout';
import { SettingsTabs } from '@/components/settings/settings-tabs';

const Settings = () => {
  return (
    <MainLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">
            Configure your API keys and application preferences
          </p>
        </div>

        <SettingsTabs />
      </div>
    </MainLayout>
  );
};

export default Settings;
