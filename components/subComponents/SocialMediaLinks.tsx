// Constants
import { socialLinks } from "../../constants/socialLinks";

interface SocialMediaLinksProps {
  shortOrFull: "short" | "full";
}

const SocialMediaLinks: React.FC<SocialMediaLinksProps> = ({
  shortOrFull = "short",
}) => {
  return (
    <>
      {socialLinks.map(({ name, link, fullName, icon }, i) => (
        <a key={i} href={link} rel="noopener" target="_blank">
          {icon} ‎ {shortOrFull === "short" ? name : fullName}
        </a>
      ))}
    </>
  );
};

export default SocialMediaLinks;
