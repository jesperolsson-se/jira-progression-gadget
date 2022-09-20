import api, { route } from "@forge/api";

export default class ApiEpic {

  /**
   * Ctor.
   * @param id Issue ID or key.  
   */
  constructor(id) {
    this.id = id
  }

  async summary() {
    const epic = await api
      .asApp()
      .requestJira(route`/rest/api/3/issue/${this.id}`);
    const json = await epic.json();
    return json.fields.summary
  }

  async unresolvedChildren() {
    const children = await api
      .asApp()
      .requestJira(route`/rest/api/3/search?jql="Epic Link" in (${this.id}) AND resolved = EMPTY`,
      { headers: { 'Accept': 'application/json'} });
    const json = await children.json();
    return json.total
  }

  async children() {
    const children = await api
      .asApp()
      .requestJira(route`/rest/api/3/search?jql="Epic Link" in (${this.id})`,
      { headers: { 'Accept': 'application/json'} });
    const json = await children.json();
    return json.total
  }
}

