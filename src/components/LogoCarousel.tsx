import { motion } from "framer-motion";

const LogoCarousel = () => {
  const partners = [
    "Government of India",
    "Digital India",
    "Ministry of Electronics & IT",
    "Aadhaar (UIDAI)",
    "India Post",
    "National Informatics Centre",
    "Common Service Centers",
    "Jan Aushadhi",
  ];

  const extendedPartners = [...partners, ...partners, ...partners];

  return (
    <div className="w-full overflow-hidden bg-background/50 backdrop-blur-sm py-12 mt-20">
      <div className="container px-4 text-center mb-8">
        <p className="text-muted-foreground text-sm">
          Supporting India's Digital Transformation Initiative
        </p>
      </div>
      <motion.div 
        className="flex space-x-16"
        initial={{ opacity: 0, x: "0%" }}
        animate={{
          opacity: 1,
          x: "-50%"
        }}
        transition={{
          opacity: { duration: 0.5 },
          x: {
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            delay: 0.5
          }
        }}
        style={{
          width: "fit-content",
          display: "flex",
          gap: "4rem"
        }}
      >
        {extendedPartners.map((partner, index) => (
          <motion.div
            key={`partner-${index}`}
            className="text-sm text-muted-foreground whitespace-nowrap"
            initial={{ opacity: 0.6 }}
            whileHover={{ 
              opacity: 1,
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          >
            {partner}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoCarousel;