import { motion } from "framer-motion";

type Props = { title: string; align?: "start" | "center" };

const Title = ({ title, align }: Props) => {
  const lineVariants = {
    hidden: { width: 0 },
    line40: { width: "10rem", transition: { duration: 1, type: "spring" } },
    line3: { width: "0.75rem", transition: { duration: 1, type: "spring" } },
    line1: { width: "0.25rem", transition: { duration: 1, type: "spring" } },
  };

  return (
    <div
      className={
        align === "start"
          ? "flex justify-start"
          : "flex justify-start sm:justify-center"
      }
    >
      <div className="mx-8 flex w-fit flex-col md:mx-0">
        <h2 className="mt-10 text-3xl font-bold text-gray-900 dark:text-gray-100 sm:mt-16 lg:mt-20">
          {title}
        </h2>
        <div className="mt-5 flex">
          <motion.span
            variants={lineVariants}
            initial="hidden"
            whileInView="line40"
            viewport={{ once: true }}
            className="inline-block h-1 w-40 rounded-full bg-blue-800"
          ></motion.span>
          <motion.span
            variants={lineVariants}
            initial="hidden"
            whileInView="line3"
            viewport={{ once: true }}
            className="ml-1 inline-block h-1 w-3 rounded-full bg-blue-800"
          ></motion.span>
          <motion.span
            variants={lineVariants}
            initial="hidden"
            whileInView="line1"
            viewport={{ once: true }}
            className="ml-1 inline-block h-1 w-1 rounded-full bg-blue-800"
          ></motion.span>
        </div>
      </div>
    </div>
  );
};

export default Title;
