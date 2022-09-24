**Jira progression gadget** enables Jira Dashboards to display epics' progress.
This plugin is designed to satisfy the following needs:
1) Key project management information should be co-located.
2) Progress should be available to a quick glance.
3) Managerial data should always be up-to-date.
4) Proper tools should be free.

# Installation

This project is currently in Beta. To try it out, you must install it manually.
Download
[Atlassian Forge](https://developer.atlassian.com/platform/forge/set-up-forge/).
and then run

```
npm install
forge install
```

Open your Jira instance and naviate to `Dashboards`. You should now find
`jira-progression-gadget` in the list of gadgets. 

Should you encounter any problems related to `Atlassian Forge` please refer to
the official [documentation]((https://developer.atlassian.com/platform/forge))
or [support](https://developer.atlassian.com/platform/forge/get-help/).

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
