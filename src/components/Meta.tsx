import { NextSeo } from "next-seo";
import { metaTags } from "~/utils/assets/defaultData";

const Meta = () => {
  const { title, description, url, image } = metaTags;

  return (
    <NextSeo
      title={title}
      description={description}
      canonical={url}
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
      }}
    />
  );
};

export default Meta;
