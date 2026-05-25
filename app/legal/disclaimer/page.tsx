import LegalDocumentShell from "../../components/LegalDocumentShell";
import { legalPageMetadata } from "../../lib/legal-metadata";

export const metadata = legalPageMetadata("disclaimer");

export default function DisclaimerPage() {
  return <LegalDocumentShell docId="disclaimer" />;
}
