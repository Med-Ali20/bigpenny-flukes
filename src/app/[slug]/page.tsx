import React from "react";
import { Metadata } from "next";
import Components from "../component-generator";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Helper function to ensure slug has leading slash for API requests
const ensureLeadingSlash = (slug: string): string => {
  return slug.startsWith('/') ? slug : `/${slug}`;
};

// Helper function to normalize slug for Next.js routing (remove leading slash)
const normalizeSlugForRouting = (slug: string): string => {
  return slug.startsWith('/') ? slug.substring(1) : slug;
};

export const generateStaticParams = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/flukes-pages`
  );
  const data = await res.json();
  return data.data.map((el: any) => {
    return {
      slug: normalizeSlugForRouting(el.attributes.Slug),
    };
  });
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const slugWithSlash = ensureLeadingSlash(slug);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/flukes-pages?filters[slug][$eq]=${slugWithSlash}&populate=deep`
  );
  const data = await res.json();
  console.log(data.data[0].attributes)
  
  // Handle case where page is not found
  if (!data.data || data.data.length === 0) {
    return {
      title: 'Page Not Found',
      description: 'The requested page could not be found.',
    };
  }

  const page = data.data[0].attributes;

  return {
    title: page.Title,
    description: page.Description,
    keywords: page.Keywords,
  };
}

const Page: React.FC<PageProps> = async ({ params }) => {
  const { slug } = await params;
  const slugWithSlash = ensureLeadingSlash(slug);
  console.log('Original slug:', slug);
  console.log('API request slug:', slugWithSlash);
  
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/flukes-pages?filters[slug][$eq]=${slugWithSlash}&populate=deep`
  );
  const data = await res.json();
  
  // Handle case where page is not found
  if (!data.data || data.data.length === 0) {
    return (
      <div className="mb-12">
        <h1>Page Not Found</h1>
        <p>The page "{slug}" could not be found.</p>
      </div>
    );
  }

  const components = data.data[0]?.attributes?.Components || [];

  return <div className="-mb-12">{components?.map(Components)}</div>;
};

export default Page;
