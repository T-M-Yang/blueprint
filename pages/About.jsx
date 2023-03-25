import Bio from "@/components/Bio";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["Bio"])),
    },
  };
}

const About = () => {
  const { t } = useTranslation();

  return (
    <motion.div>
      <Bio useTranslation={t} />
    </motion.div>
  );
};

export default About;
