import LegalDocumentShell from "../../components/LegalDocumentShell";
import { legalPageMetadata } from "../../lib/legal-metadata";

export const metadata = legalPageMetadata("terms");

export default function TermsOfServicePage() {
  return <LegalDocumentShell docId="terms" />;
}
