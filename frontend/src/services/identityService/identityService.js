// TODO(Jason): Remove mock data
import { identities } from "../mock/mockData";

class IdentityService {
  constructor() {
    this.addNewIdentity = this.addNewIdentity.bind(this);
  }

  maxIdentityNum = 30;

  // TODO(Jason): This function currently just return 0
  async getIdentityNum() {
    return 0;
  }

  async getAllIdentities() {
    return identities;
  }

  async getIdentityWithId(id) {
    return identities.find((identity) => identity.id === id);
  }

  async addNewIdentity(identity) {
    // Get current number of identity in DB
    const currentIdentityNum = await this.getIdentityNum();
    if (currentIdentityNum >= this.maxIdentityNum) {
      throw new Error("Too many identities");
    }
    const { name, description } = identity;
    console.log(`[identityService]: Add Identity - ${name} ${description}`);
  }

  async deleteIdentity(id) {
    console.log(`[IdentityService]: Identity with id{${id}} deleted`);
  }
}

export default IdentityService;
