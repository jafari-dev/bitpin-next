import Link from "next/link";
import { Navbar } from "react-bootstrap";
import { memo } from "react";

function NavigationMenu(): React.ReactElement {
  return (
    <Navbar className="rounded-3 d-flex flex-row align-items-center justify-content-start">
      <Link href="/">صفحه اصلی</Link>
      <Link href="/markets">لیست مارکت‌ها</Link>
    </Navbar>
  );
}

export default memo(NavigationMenu);
