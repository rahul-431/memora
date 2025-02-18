import Link from "next/link";

interface IconLinkType {
  icon: React.ReactNode;
  href: string;
  iconSize?: "sm" | "lg" | "xl" | "2xl";
}
const IconLink = ({ icon, href, iconSize }: IconLinkType) => {
  return (
    <Link
      href={href}
      className={`hover:text-[#BA933E] text-${iconSize ? iconSize : "xl"}`}
    >
      {icon}
    </Link>
  );
};

export default IconLink;
