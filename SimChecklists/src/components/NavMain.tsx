import type { ReactNode } from "react";
import Button from "react-bootstrap/Button";

interface Props {
  entries: Record<string, string>; // {"Name to display": "Link",}
}

function NavMain({ entries }: Props): ReactNode {
  const Items = Object.entries(entries).map(([name, link]) => (
    <Button variant="outline-primary" href={link} key={link} className="m-2">
      {name}
    </Button>
  ));

  return <>{Items}</>;
}

export default NavMain;
