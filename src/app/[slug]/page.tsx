import React from "react";
import { Metadata } from "next";
import Components from "../component-generator";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const generateStaticParams = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/flukes-pages`
  );
  const data = await res.json();
  return data.data.map((el: any) => {
    return {
      slug: el.attributes.Slug,
    };
  });
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/flukes-pages?filters[slug][$eq]=${slug}&populate=deep`
  );
  const data = await res.json();
  const page = data.data[0].attributes;

  return {
    title: page.Title,
    description: page.Description,
    keywords: page.Keywords,
  };
}

const Page: React.FC<PageProps> = async ({ params }) => {
  const { slug } = await params;
  console.log(slug);
  
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/flukes-pages?filters[slug][$eq]=${slug}&populate=deep`
  );
  const data = await res.json();
  const components = data.data[0]?.attributes?.Components || [];

  return <div className="mb-12">{components?.map(Components)}</div>;
};

export default Page;