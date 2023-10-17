import { ReactElement } from "react";
import { useRouter } from "next/router";

interface SidebarListItemProps {
  Icon: ReactElement;
  title: string;
}

function SidebarListItem({ Icon, title }: SidebarListItemProps) {
  const router = useRouter();

  // Logout func
  const logout = (title: string) => {
    if (title === "logout") {
      sessionStorage.removeItem("Token");
      router.push("/login");
    }
    return;
  };

  return (
    <div className="sidebar-items font-changa" onClick={() => logout(title)}>
      {Icon}
      <p>{title}</p>
    </div>
  );
}

export default SidebarListItem;
