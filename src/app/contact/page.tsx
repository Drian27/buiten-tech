import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import type { Metadata } from "next";

<<<<<<< HEAD
import { Metadata } from "next";

=======
>>>>>>> 960a19ee4b241a4043ec59a4e419967882ddda2f
export const metadata: Metadata = {
  title: "Buiten - Contact",
  description: "This is Contact Page for Startup Nextjs Template",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
        breadcrumbLinks={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ]}
      />

      <Contact />
    </>
  );
};

export default ContactPage;
