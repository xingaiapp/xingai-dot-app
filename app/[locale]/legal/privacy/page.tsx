import LegalDocumentShell from "../../../components/LegalDocumentShell";
import { parseRoutingLocale } from "../../../lib/locale-routing";
import { legalPageMetadata } from "../../../lib/legal-metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return legalPageMetadata(parseRoutingLocale(locale), "privacy");
}

export default function PrivacyPolicyPage() {
  return <LegalDocumentShell docId="privacy" />;
}
