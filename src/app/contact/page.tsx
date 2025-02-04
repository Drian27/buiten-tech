import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buiten - Contact",
  description: "This is Contact Page for Startup Nextjs Template",
};

const ContactPage = () => {
  return (
    <>
      {/* <Breadcrumb
        pageName=""
        description=""
        breadcrumbLinks={[
          // { name: "", url: "" },
          // { name: "", url: "" },
        ]}
      /> */}

      <Contact />
    </>
  );
};

export default ContactPage;
