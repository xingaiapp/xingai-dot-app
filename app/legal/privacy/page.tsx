import LegalDocumentShell from "../../components/LegalDocumentShell";
import { legalPageMetadata } from "../../lib/legal-metadata";

export const metadata = legalPageMetadata("privacy");

export default function PrivacyPolicyPage() {
  return <LegalDocumentShell docId="privacy" />;
}
