// TODO(Jason): Remove mock data
import { identities } from "../mock/mockData";

class IdentityService {
  getAllIdentities() {
    return identities;
  }
}

export default IdentityService;
