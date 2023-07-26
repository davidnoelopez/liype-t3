import { NextSeo } from "next-seo";
import { metaTags } from "~/utils/assets/defaultData";

const Meta = () => {
  const { siteName, title, description, url, image } = metaTags;

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
