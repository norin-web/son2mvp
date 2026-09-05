import LegalDoc from "../components/LegalDoc";
import { terms } from "../content/legal";

export default function Terms() {
  return <LegalDoc kind="Legal" title="Terms of Use" sections={terms} />;
}
