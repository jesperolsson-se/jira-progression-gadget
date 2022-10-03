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

# Use cases

Jira users [requested](https://jira.atlassian.com/browse/JSWCLOUD-9049)
a progression gadget as early as 2013. Many real-world scenarios have been
described over the years. We've paraphrased some of them below.

## Communicating product status

At my company we've organized a couple of Jira Dashboards that show the overall
status of our roadmap/portfolio. We display these on screens in the office, and
managers and developers are responding really well to them. A quick glance in
the morning or when you go grab a coffee tells you e.g., that the bugs are
under control or about potential bottle necks.

The problem is, we can't show how much of a feature (epic) is done. The best we
can do is creating one of those big `Epic Burndown chart`s for each of a dozen
epics or more. That doesn't meet our needs at all. We want a summary - an
overview. That takes up very little screen space and comes without any clutter.

## Time-consuming workarounds

I'm a product owner who splits her time between a couple of different products.
So I'm meeting with lots of stakeholders who are interested in our progress in
different areas. It's a lot to keep track of and they get frustrated if all I
can tell them is that we're still working on the same epics as last time we
talked. And the time before last time. And the time before that...

What I'm doing right now is exporting a lot of our Jira data to excel and try
to whip together the information that's important to each stakeholder. The
problem is, this takes too much time. Time that I really should be spending on
my teams. Honestly, I'm already working more hours than I should just to keep
things running.

## On-demand scope reporting

My management teams always wants to know how many stories in an epic are
complete and, I agree, that provides value. When we realize that an epic is in
trouble we can start early with managing expectations, like negotiating scope
or help our customers plan for a later date. The management team makes better
decisions the more data they have. The more accurate and up-to-date data.

The problem is, you have to click around through agile boards and whatnot to
get that data. And then they don't think it's worth their time. Or mine. So we
end up making worse decisions. So one dashboard that has all the information is
really important. One dashboard - one click - that they can look at whenever
they need to.

# How to contribute

Thank you for considering to contribute to this project. We appreciate all
efforts to improve this plugin, no matter how small. Please fork the repo, make
your changes, and submit a pull request. Small pull request will be processed
much faster and are less likely to be rejected.
