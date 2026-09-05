import LegalDoc from "../components/LegalDoc";
import { privacy } from "../content/legal";

export default function Privacy() {
  return <LegalDoc kind="Legal" title="Privacy Policy" sections={privacy} />;
}
