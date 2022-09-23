**Jira progression gadget** enables Jira Dashboards to display epics' progress.
This plugin is designed to satisfy the following needs:
1) Key project management information should be co-located.
2) Progress should be available to a quick glance.
3) Managerial data should always be up-to-date.
4) Proper tools should be free.

## Requirements

See [Set up Forge](https://developer.atlassian.com/platform/forge/set-up-forge/) for instructions to get set up.

## Quick start
- Install dependencies:
```
npm install
```

- Modify your app by editing the `src/index.jsx` file.

- Build and deploy your app by running:
```
forge deploy
```

- Install your app in an Atlassian site by running:
```
forge install
```

- Develop your app by running `forge tunnel` to proxy invocations locally:
```
forge tunnel
```

### Notes
- Use the `forge deploy` command when you want to persist code changes.
- Use the `forge install` command when you want to install the app on a new site.
- Once the app is installed on a site, the site picks up the new app changes you deploy without needing to rerun the install command.

## Support

See [developer.atlassian.com/platform/forge/](https://developer.atlassian.com/platform/forge) for documentation and tutorials explaining Forge,
including the [documentation of Forge dashboard gadgets](https://developer.atlassian.com/platform/forge/manifest-reference/#jira-dashboard-gadget). 

See [Get help](https://developer.atlassian.com/platform/forge/get-help/) for how to get help and provide feedback.
