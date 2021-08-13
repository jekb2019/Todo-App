// TODO(Jason): Remove mock data
import { identities } from "../mock/mockData";

class IdentityService {
  maxHabitNum = 30;

  async getAllIdentities() {
    return identities;
  }

  async addNewIdentity(identity) {
    console.log("[identityService]: Add Identity");
  }
}

export default IdentityService;
