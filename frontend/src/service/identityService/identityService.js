// TODO(Jason): Remove mock data
import { identities } from "../mock/mockData";

class IdentityService {
  maxHabitNum = 30;

  getAllIdentities() {
    return identities;
  }
}

export default IdentityService;
