import LegalDocumentShell from "../../../components/LegalDocumentShell";
import { parseRoutingLocale } from "../../../lib/locale-routing";
import { legalPageMetadata } from "../../../lib/legal-metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return legalPageMetadata(parseRoutingLocale(locale), "disclaimer");
}

export default function DisclaimerPage() {
  return <LegalDocumentShell docId="disclaimer" />;
}
