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
            width: 800,
            height: 600,
            alt: title,
          },
        ],
        locale: "es_MX",
        site_name: siteName,
      }}
    />
  );
};

export default Meta;
