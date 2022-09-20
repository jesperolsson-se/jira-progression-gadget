import api, { route } from "@forge/api";

export default class ApiEpics {
  async epics() {
    return await api
    .asApp()
    .requestJira(route`/rest/api/3/search?jql=issuetype=Epic`,
    { headers: { 'Accept': 'application/json'} });
  }
}

