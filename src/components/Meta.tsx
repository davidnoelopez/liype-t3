import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { metaTagsMX, metaTagsUS } from "~/utils/assets/defaultData";

const Meta = () => {
  const { locale } = useRouter();
  const { siteName, title, description, url, image } =
    locale === "es-MX" ? metaTagsMX : metaTagsUS;

  return (
    <NextSeo
      title={title}
      description={description}
      canonical={url}
      themeColor="#16274E"
      openGraph={{
        url,
        title,
        description,
        images: [
          {
            url: image,
            width: 500,
            height: 150,
            alt: title,
          },
        ],
        locale: "es_MX",
        site_name: siteName,
      }}
      additionalLinkTags={[
        {
          rel: "icon",
          href: "/favicon.ico",
        },
        {
          rel: "apple-touch-icon",
          href: "/apple-touch-icon.jpg",
          sizes: "180x180",
        },
        {
          rel: "icon",
          href: "/icon-32x32.png",
          sizes: "32x32",
        },
        {
          rel: "icon",
          href: "/icon-16x16.png",
          sizes: "16x16",
        },
      ]}
    />
  );
};

export default Meta;
