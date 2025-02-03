import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

// ✅ Use "metadata" for Next.js Page Metadata
export const metadata = {
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
