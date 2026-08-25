import { DocsPage, DocsBody } from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import { source } from "@/lib/source";
import { getMDXComponents } from "@/components/mdx";

export default async function Page(
  props: PageProps<"/docs/[[...slug]]">
) {
  const params = await props.params;

  const page = source.getPage(params.slug);

  if (!page) {
    notFound();
  }

  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc}>
      <DocsBody>
        <MDX components={getMDXComponents()} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}