"use client";

const socialLinks = [
  {
    name: "Twitter",
    url: "https://x.com/Tharanitha82201",
    icon: "/icons/x.svg",
    available: true,
  },
  {
    name: "Peerlist",
    url: "https://peerlist.io/tharanithar",
    icon: "/icons/peerlist.svg",
    available: true,
  },

  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/tharanithar-r/",
    icon: "/icons/linkedin.svg",
    available: true,
  },
  {
    name: "GitHub",
    url: "https://github.com/tharanithar-r",
    icon: "/icons/github.svg",
    available: true,
  },
  {
    name: "Email",
    url: "mailto:rtharanithar@gmail.com",
    icon: "/icons/mail.svg",
    available: true,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/tharanithar_r/",
    icon: "/icons/instagram.svg",
    available: false,
  },
];

export const SocialLinks = () => {
  const mobileLinks = socialLinks.filter((link) => link.name !== "Instagram");

  const getHoverColor = (socialName: string, available: boolean) => {
    if (!available) return "opacity-50 cursor-not-allowed";

    switch (socialName) {
      case "Twitter":
        return "hover:!bg-[#1da1f2]";
      case "Peerlist":
        return "hover:!bg-[#00AA45]";
      case "Instagram":
        return "hover:!bg-[#c32aa3]";
      case "LinkedIn":
        return "hover:!bg-[#0a66c2]";
      case "GitHub":
        return "hover:!bg-[#6E40C9]";
      case "Email":
        return "hover:!bg-[#D44638]";
      default:
        return "hover:bg-card-bg-alt/80";
    }
  };

  return (
    <>
      {/* Desktop Layout - Grid with all social links including Instagram */}
      <div
        className='hidden lg:grid gap-4 w-full justify-center content-center overflow-hidden relative flex-none h-full lg:justify-end lg:content-start lg:w-auto'
        style={{
          gridTemplateColumns: "repeat(3, minmax(64px, 1fr))",
          gridTemplateRows: "repeat(2, 1fr)",
          gridAutoRows: "1fr",
          height: "100%",
          padding: "0",
        }}
      >
        {socialLinks.map((social) => {
          return (
            <a
              key={social.name}
              href={social.available ? social.url : "#"}
              target={social.available ? "_blank" : "_self"}
              rel={social.available ? "noopener noreferrer" : undefined}
              className={`group flex items-center justify-center aspect-square min-h-16 rounded-xl transition-all duration-200 active:scale-95 ${getHoverColor(
                social.name,
                social.available
              )}`}
              style={{
                backgroundColor: "var(--card-bg-secondary)",
                borderColor: "var(--color-border)",
                borderWidth: "1px",
                borderStyle: "solid",
              }}
              aria-label={social.name}
              onClick={
                !social.available ? (e) => e.preventDefault() : undefined
              }
            >
              <div
                className='relative w-8 h-8 group-hover:text-white'
                style={{ color: "var(--icon-color)" }}
              >
                <span
                  aria-hidden='true'
                  className='absolute inset-0'
                  style={{
                    WebkitMaskImage: `url(${social.icon})`,
                    maskImage: `url(${social.icon})`,
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskSize: "contain",
                    maskSize: "contain",
                    WebkitMaskPosition: "center",
                    maskPosition: "center",
                    backgroundColor: "currentColor",
                  }}
                />
                <span className='sr-only'>{social.name}</span>
              </div>
            </a>
          );
        })}
      </div>

      {/* Mobile Layout - Horizontal linear layout covering full width */}
      <div className='flex lg:hidden gap-4 w-full justify-center items-center px-4 py-3'>
        {mobileLinks.map((social) => {
          return (
            <a
              key={social.name}
              href={social.available ? social.url : "#"}
              target={social.available ? "_blank" : "_self"}
              rel={social.available ? "noopener noreferrer" : undefined}
              className={`group flex items-center justify-center aspect-square flex-1 rounded-[16px] transition-all duration-200 active:scale-95 ${getHoverColor(
                social.name,
                social.available
              )}`}
              style={{
                backgroundColor: "var(--card-bg-secondary)",
                borderColor: "var(--color-border)",
                borderWidth: "1px",
                borderStyle: "solid",
                minHeight: "50px",
              }}
              aria-label={social.name}
              onClick={
                !social.available ? (e) => e.preventDefault() : undefined
              }
            >
              <div
                className='relative w-8 h-8 group-hover:text-white'
                style={{ color: "var(--icon-color)" }}
              >
                <span
                  aria-hidden='true'
                  className='absolute inset-0'
                  style={{
                    WebkitMaskImage: `url(${social.icon})`,
                    maskImage: `url(${social.icon})`,
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskSize: "contain",
                    maskSize: "contain",
                    WebkitMaskPosition: "center",
                    maskPosition: "center",
                    backgroundColor: "currentColor",
                  }}
                />
                <span className='sr-only'>{social.name}</span>
              </div>
            </a>
          );
        })}
      </div>
    </>
  );
};
